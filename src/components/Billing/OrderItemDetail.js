import React, {Component} from 'react';

class OrderItemDetail extends Component {
    render() {
        const {total } = this.props;
        let gstAdd = (total * 0.05);
        let newTotal = (gstAdd + total);
        return (
            <div className="orderItemDetails">
                <h3>Payable Amount</h3>
                <ul>
                    <li><p>Amount :- </p> Rs. {total}</li>
                    <li><p>Added Tax(GST 5%) :- </p>Rs. {gstAdd}</li>
                    <li>
                        <p>
                            Payable Amount :- </p>
                        Rs. {newTotal}
                    </li>
                    <li><p style={{"color":"#31a9b5"}}>Shipping Charges Free*</p></li>
                </ul>
            </div>
        );
    }
}

export default OrderItemDetail;