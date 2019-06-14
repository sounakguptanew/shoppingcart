import React, {Component} from 'react';
import BillingForm from './BillingForm';
import '../stylesheet/billingForm.css';
import {connect} from 'react-redux';
import OrderItemDetails from './OrderItemDetail';
import ItemDetails from './itemDetail';

class Checkout extends Component {


    render() {
        const {total} = this.props.total;
        const {AddToCart} = this.props;
        return (
            <div className="checkOut">
                <h1>Billing Details</h1>
                <div>
                    <div className="billing">
                        <BillingForm
                            fieldSet = "Billing"
                            name ="billing"
                            {...this.props}
                        />
                    </div>
                    <div className='billingOrderDetails'>
                        <div className="orderitem">
                            <OrderItemDetails
                                total = {total}
                            />
                        </div>
                        {
                            AddToCart.length > 0 ?
                                <div className="itemDetails orderitem">
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
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            AddToCart.map(item => {
                                                return (
                                                    <ItemDetails
                                                        name={item.productname}
                                                        price={item.price}
                                                        quantity={item.quantity}
                                                        color={item.color}
                                                        size={item.size}
                                                    />
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>:null
                        }
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    BillingAddress: state.BillingAddress,
    total : state.totalReducer,
    AddToCart: state.AddToCart
})

export default connect(mapStateToProps,null)(Checkout);