import React , {Component } from 'react';
import RadioButton from './cartMenuComponent/RadioButton';
import '../stylesheet/radio.css';
import SelectSize from './cartMenuComponent/SelectSize';


class CartMenuOption extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayColorButton : false,
            currentColor: 'red',
        }
    }

    colorButton = (event) => {
        event.stopPropagation();
        this.setState({
            displayColorButton : !this.state.displayColorButton
        });
    }

    render(){
        const {imageKeys , handleClick,handleChange,selectedColor,size} = this.props;
        let btn = this.state.displayColorButton ? "displayBlock" : "hideBlock";
        return(
            <div>
                <form  onSubmit={handleClick}>
                    <div className={`${btn} cartmenu`}>
                        <RadioButton
                            name={this.props.name}
                            colorButtonToggle = {this.colorButton}
                            imageKeys = { imageKeys }
                            handleChange ={e => {
                                handleChange(e)
                            }}
                            selectedColor = {selectedColor}
                        />
                    </div>
                    <div>
                        <SelectSize
                            name={this.props.name}
                            handleChange = {e => handleChange(e)}
                            size = { size}
                        />
                    </div>
                    <div>
                        <button type="submit" value="Add To Cart">Add To Cart</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CartMenuOption;