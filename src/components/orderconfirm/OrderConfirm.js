import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../stylesheet/orderConfirm.css';
import {clearData} from "./Action/ClearData";
import {Redirect } from 'react-router-dom';

class OrderConfirm extends Component {
    clearData = (event) => {
        event.preventDefault();
        this.props.clearData();
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="orderConfirm">
                <h1>Order Confirmed</h1>
                <div className="order_Details">
                    <h2>Billing Details</h2>
                {
                    this.props.BillingAddress.map((item)=> {
                            return(
                                <div className="order_details">
                                    <ul>
                                        <li><p>Name :- </p>{item.username}</li>
                                        <li> <p>Email :- </p>{item.email}</li>
                                        <li><p>Address :- </p>{item.address},{item.city}</li>
                                        <li> <p>Pincode :-</p>{item.pincode}</li>
                                        <li><p>Country :-</p> {item.country || "India"}</li>
                                    </ul>
                                </div>
                            )
                        }
                    )
                }
                </div>
                <div className="order_Details">
                    <h2>Shipping Details</h2>
                    {
                        this.props.BillingAddress.map((item)=> {
                                return(
                                    <div className="order_details">
                                        <ul>
                                            <li><p>Name :- </p>{item.shipping_username}</li>
                                            <li> <p>Email :- </p>{item.shipping_email}</li>
                                            <li><p>Address :- </p>{item.shipping_address},{item.shipping_city}</li>
                                            <li> <p>Pincode :-</p>{item.shipping_pincode}</li>
                                            <li><p>Country :-</p> {item.shipping_country || "India"}</li>
                                        </ul>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
                <h3>Keep On Shopping!</h3>
                <p><button
                    style={{"padding":"10px","font-size":"16px","cursor":"pointer","color":"#333"}}
                    onClick={this.clearData}>Continue Shopping</button></p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        BillingAddress : state.BillingAddress
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        clearData: (data) => dispatch(clearData(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderConfirm);