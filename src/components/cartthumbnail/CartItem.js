import React, {Component} from 'react';
import cross from '../assets/cross.png';

class CartItem extends Component {
    render() {
        const {name,color,price,quantity,size,deleteItem,id} = this.props;
        return (
            <tr>
                <td>{name}</td>
                <td>{size}</td>
                <td>{color}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td><img src={cross}
                         alt="cross"
                         title="Delete"
                         width="15px"
                         onClick={(e) => deleteItem(e, id)}
                />
                </td>
            </tr>
        );
    }
}

export default CartItem;