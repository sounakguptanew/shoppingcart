import React , { Component } from 'react';

class RadioButton extends Component{



    render(){
        const { name , colorButtonToggle , imageKeys,handleChange, selectedColor} = this.props;

        const newImageKeys=[];
        newImageKeys[1]=selectedColor;
        const tempImageKeys=imageKeys.filter(item=>item!==selectedColor);
        newImageKeys[0]=tempImageKeys[0];
        newImageKeys[2]=tempImageKeys[1];
        return(
            <div className="radio">
                <ul>
                    {
                        newImageKeys.map((item) => {
                                return(
                                    <li onClick={colorButtonToggle}>
                                        <label className="container">
                                            <input
                                                type="radio"
                                                onClick={(e) => handleChange(e)}
                                                value={item}
                                                name={`${name} radio`}/>
                                            <span style = {{backgroundColor:item}} className="checkmark navyblue"/>
                                        </label>
                                    </li>
                                )
                            }
                        )
                    }

                </ul>
            </div>
        )
    }
}

export default RadioButton;