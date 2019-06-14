import React, {Component} from 'react';
import ProductThumbnail from './ProductThumbnail';
import '../stylesheet/cart.css';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import cartimage from '../assets/cartimage.svg';
import 'w3-css/w3.css';
import NotificationBadge, {Effect} from 'react-notification-badge';
import posed from "react-pose";
import CartItemData from './CartItemData';

const Square = posed.div({
    idle: {
        opacity: 1
    },
    hovered: {
        opacity: 1
    }
});


class CartContainer extends Component{
    constructor(){
        super();
        this.state = {
            hovering: false,
            cartButton : true
        };
    }

    cartIconHandler = ()=>{
        this.setState({
            cartButton : !this.state.cartButton
        })
    }

    render(){
        let arr = this.props.thumb;
        const { AddToCart } = this.props;
        return(
            <div className="productContainer">
                <div className="cart"
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
                        <div className="badge container">
                            <NotificationBadge
                                count={AddToCart.length || 0}
                                effect={Effect.SCALE}
                            />
                        </div>

                </div>
                <Square
                    pose={this.state.hovering ? "hovered" : "idle"}
                    onLoad={() => this.setState({ hovering: true })}
                >
                    {
                        arr.map((item,index) => {
                                return(

                                    <ProductThumbnail
                                        image = {item.image}
                                        productname = {item.productname}
                                        category = {item.category}
                                        price = {item.price}
                                        alt = {item.alt}
                                        defaultColor ={item.defaultColor}
                                        keys = {item.key}
                                    />
                                )
                            }
                        )
                    }
                </Square>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        thumb: state.reducer.thumb,
        AddToCart : state.AddToCart || 0,
    }
}

export default connect(mapStateToProps,null)(CartContainer);