import React , {Component} from 'react';
import '../stylesheet/tableItem.css';
import { connect } from 'react-redux';
import CartItemData from './CartItemData';
import {clearCartAction} from './Action/clearCartAction';
import {deleteItemAction} from './Action/deleteItemAction';
import { NavLink } from "react-router-dom";
import {increment , decrement} from "./Action/quantityAction";
import posed from "react-pose";


const Square = posed.div({
    idle: {
        opacity: 0
    },
    hovered: {
        opacity: 1
    }
});

class CartItem extends Component{
    constructor(){
        super();
        this.state = {
            updateCartItem : true,
            checkOutButton : true,
            hovering:false,
            inc : false,
            dec: false,
        }
    }
    updateHandleClick = (event) => {
        event.preventDefault();
        this.setState({
            updateCartItem : !this.state.updateCartItem
        })
    }

    emptyCart = (event) => {
        event.preventDefault();
        this.props.clearCartAction();
    };
    continueShopping = (event) => {
        event.preventDefault();
        this.props.history.push("/");
    }

    deleteItem = (event,id) => {
        //event.preventDefault();
        this.props.deleteItemAction(id);
    }
    addQuantity = (id,price)=> {
        this.props.increment({
            id,
            price
        });
    }

    decQuantity = (id, price) => {
        this.props.decrement({
            id,
            price
        });
    }
    render(){
        const{AddToCart} = this.props;

        return(
            <div>
                {
                    AddToCart.length > 0 ?
                        <Square
                            pose={this.state.hovering ? "hovered" : "idle"}
                            onLoad={() => this.setState({ hovering: true })}
                        >
                            <div className="cartItem">
                                <h1>your Shopping Cart</h1>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>item</th>
                                        <th>Color</th>
                                        <th>Size</th>
                                        <th>Quantity</th>
                                        <th colSpan="2">Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        AddToCart.map(item => {

                                            return(
                                                <CartItemData
                                                    name = {item.productname}
                                                    price ={item.price}
                                                    color = {item.color}
                                                    size = {item.size}
                                                    key = {item.key}
                                                    deleteItem = {this.deleteItem}
                                                    id = {item.key}
                                                    quantity = {item.quantity}
                                                    addQuantity = {this.addQuantity}
                                                    decQuantity = {this.decQuantity}
                                                    updateCartItem = {this.state.updateCartItem}
                                                />
                                            )
                                        })
                                    }
                                    </tbody>
                                    <ul>
                                        <li>Sub-Total : {this.props.total} </li>
                                        <li>(GST 5%): {this.props.total*0.05} </li>
                                        <li>Total : {this.props.total + (this.props.total*0.05)} </li>
                                    </ul>
                                </table>

                                <div className="tableButton">
                                    <label>
                                        <button onClick={this.updateHandleClick}>Update Cart</button>
                                        <button onClick={this.emptyCart}>Empty Cart</button>
                                        <button onClick={this.continueShopping}>Continue Shopping</button>
                                        <NavLink to="/Cart/Checkout">
                                            <button>
                                                Go To Checkout
                                            </button>
                                        </NavLink>
                                    </label>

                                </div>
                            </div>
                        </Square>
                        :
                        <p className="message">Cart is Empty, Please do Shopping
                            <button
                                onClick={this.continueShopping}
                            >
                                Continue Shopping
                            </button>
                        </p>
                }
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return{
        AddToCart : state.AddToCart,
        thumb : state.reducer.thumb,
        total: state.totalReducer.total,
    }
}
const mapDispatchToProps = (dispatch) => ({
    clearCartAction : (data) => dispatch(clearCartAction(data)),
    deleteItemAction : (data) => dispatch(deleteItemAction(data)),
    increment : (data)=> dispatch(increment(data)),
    decrement : (data) => dispatch(decrement(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(CartItem);