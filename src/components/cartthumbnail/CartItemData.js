import React, {Component} from 'react';
import '../stylesheet/cartData.css';
import {connect} from 'react-redux';
import CartItem from './CartItem';
import {deleteItemAction} from "../itemlist/Action/deleteItemAction";

class CartItemData extends Component {
    deleteItem = (e,id) => {
        e.preventDefault();
        this.props.deleteItemAction(id);
    }
    render() {
        const {total} = this.props.total;
        const {AddToCart} = this.props;
        return (
            <div className="cartRender">
                {
                    AddToCart.length > 0 ?
                        <div>
                            <h3>your Order</h3>
                            <p>Total Item : {AddToCart.length}</p>
                            <table>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Size</th>
                                    <th>Color</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    AddToCart.map((item,index) => {
                                        return (
                                            <CartItem
                                                name={item.productname}
                                                price={item.price}
                                                quantity={item.quantity}
                                                color={item.color}
                                                size={item.size}
                                                deleteItem = {this.deleteItem}
                                                id={item.key}
                                                key = {item.key}
                                            />
                                        )
                                    })
                                }
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan="6">Total :- {total}</td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>:null
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    total : state.totalReducer,
    AddToCart: state.AddToCart
})
const mapDispatchToProps = (dispatch) => ({
    deleteItemAction : (data) => dispatch(deleteItemAction(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(CartItemData);