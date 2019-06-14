import React, {Component} from 'react';
import '../stylesheet/cartView.css';
import {connect} from 'react-redux';
import SelectColor from '../itemlist/SelectColor';
import UpdateSelectSize from '../itemlist/UpdateSelectSize';
import {cart} from "./Action/cart";
import 'w3-css/w3.css';
import NotificationBadge, {Effect} from 'react-notification-badge';
import {NavLink} from "react-router-dom";
import cartimage from "../assets/cartimage.svg";
import CartItemData from "./CartItemData";

class CartView extends Component {
    constructor(props){
        super(props);
        this.state={
            updateCartItem : true,
            color:this.props.product.defaultColor,
            quantity : 0,
            size : "Small",
        }
    }
    cartIconHandler = ()=>{
        this.setState({
            cartButton : !this.state.cartButton
        })
    }
    handleChange=(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = (events) => {
        events.preventDefault();
        const {product, images} =this.props;
        const {productname,price,key} = product;
        let  imageKeys=Object.keys(this.props.images[0]);
        console.log("key",key)

        this.props.cart({
                color : this.state.color || this.state.selectedColor,
                productname : productname,
                price : price,
                size : this.state.size || "small",
                key : key +15,
                imageKeys : imageKeys
            },
        );
    }
    handleHome = (event) =>{
        event.preventDefault();
        this.props.history.push("/")
    }

    render(){

        const {product, images} =this.props;
        const {productname,price} = product;
        const image = images[0][this.state.color];

        return (
            <>
                <div className="cart"
                     style={{"margin-top":"20px"}}
                     onMouseEnter={this.cartIconHandler}
                     onMouseLeave={this.cartIconHandler}
                >
                    <NavLink to="/Cart">
                        <img
                            src={cartimage}
                            alt="Cart"
                        />
                    </NavLink>
                    {
                        this.state.cartButton ?<div> <CartItemData/></div> :null
                    }
                    <div className="badge container" style={{"position":"relative","top":"-40px","right":"-10px"}}>
                        <NotificationBadge
                            count={this.props.AddToCart.length || 0}
                            effect={Effect.SCALE}
                        />
                    </div>

                </div>
                <div className="productView">
                    <h1> cart view </h1>
                    <div className="cartView">
                        <div className="cartImage">
                            <img src={image}  width="100%"/>
                        </div>
                        <div className="cartProperty">
                            <h3>Product Details</h3>
                            <div className="content">

                                <p>Name : <span>{productname}</span></p>
                                <p>Special Price :
                                    <span>Rs. {price}
                                        <span style={{"color":"green","margin-left":"10px"}}>(40%off)</span></span>
                                </p>
                                <p>
                                    <span className="rating">4.4</span>
                                    <span style={{"color":"#666"}}>7,867 ratings and 795 reviews</span>
                                </p>
                                <p style={{"display":"flex"}}>
                                    <div> Color :</div>
                                    <span>

                    {
                        this.state.updateCartItem
                            ?
                            <SelectColor
                                color={this.state.color}
                                handleChange={this.handleChange}
                            />
                            :
                            this.state.color
                    }

                                </span>
                                </p>
                                <p style={{"display":"flex"}}>
                                    <div>Size :</div>
                                    <span>
                                {
                                    this.state.updateCartItem ?

                                        <UpdateSelectSize
                                            size={this.state.size}
                                            handleChange={this.handleChange}
                                        />
                                        :
                                        this.state.size
                                }
                            </span>
                                </p>
                                <p>
                                    <div className="band"></div>
                                </p>
                                <p><button onClick={this.handleClick}>Add To Cart</button>
                                    <button onClick={this.handleHome}>Back To HomePage</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <h3>Product Details</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aut deleniti, dolore doloribus, dolorum ducimus ea esse
                            exercitationem id illo, incidunt itaque minima molestias
                            omnis quia quidem reiciendis repellat sunt tempore.
                        </p>
                        <ul>
                            <li>
                                <ul>
                                    <li>Pattern : Sport</li>
                                    <li>Fabric : Polyester Lycra</li>

                                </ul>
                                <ul>
                                    <li>Pattern : Solid</li>
                                    <li>Sleeve : Half Sleeve</li>
                                </ul>
                                <ul>
                                    <li>Color : {this.state.color}</li>
                                    <li> Fit : Slim Fit</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params;
    const intId = parseInt(id);
    const product = state.reducer.thumb.find(item => item.key === intId);
    return{
        images : state.reducer.images,
        product,
        AddToCart : state.AddToCart
    }
}

const mapDispatchToProps = (dispatch) => ({
    cart: (data) => dispatch(cart(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(CartView);