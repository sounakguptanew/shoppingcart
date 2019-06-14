import React, {Component} from 'react';

class ItemDetail extends Component {
    render() {
        const {name,color,price,quantity,size} = this.props;
        return (
            <tr>
                <td>{name}</td>
                <td>{size}</td>
                <td>{color}</td>
                <td>{quantity}</td>
                <td>{price}</td>
            </tr>
        );
    }
}

export default ItemDetail;