import React, {Component} from 'react';
import CartMenuOption from './CartMenuOption';
import {connect} from 'react-redux';
import {cart} from './Action/cart';
import {productModal} from "./Action/productModalAction";
// import cross from "../assets/cross.png";
import {deleteProduct} from "./Action/deleteProduct";
import {Link} from 'react-router-dom';

class ProductThumbnail extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartMenuRender : false,
            selectedColor:props.defaultColor,
            quantity : 0,
            selectSize : "Small",
            hovering:false,
            productDetail : false,
        }
    }

    cartMenuOnOver = (event) => {
        event.stopPropagation();
        this.setState({
            cartMenuRender : !this.state.cartMenuRender,
        })
    };

    handleChange=(e)=> {
        let selectRadio = this.props.productname + " radio";
        if(e.target.name === selectRadio){
            this.setState({
                selectedColor : e.target.value,
            })
        }
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = (events) => {
        events.preventDefault();
        let selectSizeName = this.props.productname + " selectSize";
        let selectRadio = this.props.productname + " radio";
        let  imageKeys=Object.keys(this.props.images[0]);
        this.props.cart({
                color : this.state[selectRadio] || this.state.selectedColor,
                productname : this.props.productname,
                price : this.props.price,
                size : this.state[selectSizeName] || "small",
                key : this.props.keys,
                imageKeys : imageKeys
            },
        );
        this.setState({
            selectSize  : this.state[selectSizeName]
        })
    }
    handleImage = (id)=>{
        let selectSizeName = this.props.productname + " selectSize";
        let selectRadio = this.props.productname + " radio";
        let  imageKeys=Object.keys(this.props.images[0]);
        this.props.productModal({
            id : this.props.keys,
            color : this.state[selectRadio] || this.state.selectedColor,
            name : this.props.productname,
            productPrice : this.props.price,
            imageKeys : imageKeys,
            size : this.state[selectSizeName] || "small",
        });
        this.setState({
            productDetail : true
        })
    }

    // handleProduct = (event,id) =>{
    //     this.setState({
    //         productDetail : false
    //     })
    //     this.props.deleteProduct({
    //         id : this.props.keys,
    //     });
    // }
    render(){
        const {keys,productname , price , alt} = this.props;
        let  imageRender = this.props.images;
        let  imageKeys=Object.keys(this.props.images[0]);
        return(
            <div>
                {/*{*/}
                {/*    this.state.productDetail ?*/}

                {/*        <div className="productView">*/}
                {/*            <div className="cross">*/}
                {/*                <img src={cross}*/}
                {/*                     alt="Close"*/}
                {/*                     width="30px"*/}
                {/*                     title="Delete"*/}
                {/*                     onClick={this.handleProduct}*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            {this.props.productDetails.map((item,index) => {*/}
                {/*                return(*/}
                {/*                    <CartView name={item.name}*/}
                {/*                              id={item.id}*/}
                {/*                              productPrice={item.productPrice}*/}
                {/*                              size={item.size}*/}
                {/*                              color={item.color}*/}
                {/*                              handleClick={this.handleClick}*/}
                {/*                              handleChange = {this.handleChange}*/}
                {/*                    />*/}
                {/*                )*/}
                {/*            })*/}
                {/*            }*/}
                {/*        </div> : null*/}
                {/*}*/}
                <div className="productThumbnail"
                     onMouseEnter={this.cartMenuOnOver}
                     onMouseLeave={this.cartMenuOnOver}
                >
                    {
                        imageKeys.map(item => {
                                return(
                                    this.state.selectedColor===item?

                                        <div className="image" onClick={this.handleImage}>
                                            <Link to={`details/${keys}`}>
                                            <img src={imageRender[0][item]}
                                                 alt={alt}
                                            />
                                            </Link>
                                        </div>:null
                                )
                            }
                        )
                    }
                    <div className="detail">
                        <p>{productname}</p>
                        <p>${price}</p>
                    </div>
                    <div className={`${productname} buttonNav`}>
                        {
                            this.state.cartMenuRender ?
                                <CartMenuOption
                                    handleChange={this.handleChange}
                                    imageKeys={imageKeys}
                                    name={productname}
                                    handleClick={this.handleClick}
                                    selectedColor = {this.state.selectedColor}
                                    size = {this.state.selectSize}
                                /> : null
                        }
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        images : state.reducer.images,
        productDetails : state.productDetails
    }
}

const mapDispatchToProps = (dispatch) => ({
    cart : (data) => dispatch(cart(data)),
    productModal : (data) => dispatch(productModal(data)),
    deleteProduct : (id) => dispatch(deleteProduct(id))
})


export default connect(mapStateToProps,mapDispatchToProps)(ProductThumbnail);