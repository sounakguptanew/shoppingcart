import React, {Component} from 'react';

class SelectColor extends Component {
    render() {
        const { color ,handleChange} = this.props;
        return (
            <select
                name="color"
                value = {color}
                onChange={handleChange}
            >
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
            </select>

        );
    }
}

export default SelectColor;