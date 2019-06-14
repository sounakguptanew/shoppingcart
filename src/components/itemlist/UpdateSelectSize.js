import React , { Component } from 'react';


class UpdateSelectSize extends Component{
    render(){
        const { handleChange,size} = this.props;
        return(
            <label>
                <select
                    name='size'
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

export default UpdateSelectSize;