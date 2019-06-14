import React, {Component} from 'react';
import cross from '../assets/cross.png';
import plus from '../assets/plus.png';
import minus from '../assets/minus.png';
import UpdateSelectSize from "./UpdateSelectSize";
import SelectColor from "./SelectColor";
import {connect} from 'react-redux';
import {updateCart} from "./Action/updateCartAction";

class CartItemData extends Component {
    constructor() {
        super();
        this.state = {
            size: 'small',
            color: 'red',
        }

    }

    handleChange = (event, key) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.updateCart({
                size: this.state.size,
                color: this.state.color,
                id: this.props.id
            })
        });
    }

    render() {
        const {images} = this.props;
        const {
            name,
            color,
            price,
            size,
            deleteItem,
            id,
            quantity,
            addQuantity,
            decQuantity,
            updateCartItem
        } = this.props;


        const url = images[0][color];


        return (
            <tr>
                <td><img
                    src={url}
                    width="100px"
                    alt="product"
                /></td>
                <td>{name}</td>
                <td>
                    {
                        updateCartItem
                            ?
                            <SelectColor
                                color={color}
                                handleChange={this.handleChange}
                            />
                            :
                            color
                    }

                </td>
                <td>{
                    updateCartItem ?

                        <UpdateSelectSize
                            size={size}
                            handleChange={this.handleChange}
                        />
                        :
                        size

                }
                </td>
                <td>
                    {quantity > 1 ?
                        <img
                            className="addButton"
                            src={minus}
                            alt="Subtract"
                            width="15px"
                            onClick={() => decQuantity(id, price)}
                            title="Decrease Quantity"
                        /> : null
                    }
                    {quantity}
                    {quantity < 10 ?
                        <img
                            className="addButton"
                            src={plus}
                            alt="Add"
                            width="15px"
                            onClick={() => addQuantity(id, price)}
                            title="Increase Quantity"
                        /> : null
                    }
                </td>
                <td>{price * quantity}</td>
                <td>
                    <img
                        src={cross}
                        alt="cross"
                        width="15px"
                        title="Delete"
                        onClick={(e) => deleteItem(e, id)}
                    />
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => ({
    AddToCart: state.AddToCart,
    images: state.reducer.images,
})

const mapDispatchToProps = (dispatch) => ({
    updateCart: (data) => dispatch(updateCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItemData);