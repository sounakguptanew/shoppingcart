import React , { Component } from 'react';


class SelectSize extends Component{
    render(){
        const {name, handleChange,size} = this.props;
        return(
            <label>
                <select
                    name={`${name} selectSize`}
                    onChange={handleChange}
                    value={size}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </label>
        )
    }
}

export default SelectSize;