import React, {Component} from 'react';
import { Formik,Form,Field } from "formik";
import {validateName,validateEmail,validateZip} from './billingFormHandling';
import '../stylesheet/billingForm.css';
import {billingAction} from "./Action/billingAction";
import {connect } from 'react-redux';

class BillingForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            isBillingAddressSame: false,
            isSubmitted:false
        }
    }

    submitForm = (values, {resetForm , isSubmitting}) => {
        const {billingAction} = this.props;
        billingAction(values);
        resetForm();
        this.setState({
            isSubmitted:true,
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        const {history} = this.props;
        history.push("/Cart/Checkout/OrderConfirmed");
    }

    handleShippingAddressCheckbox = (setFieldValue, values) => {
        if(this.state.isBillingAddressSame === false){
        Object.keys(values).map(item => {
           return setFieldValue(['shipping_' + item], values[item]);
        })
        }
        else{
            Object.keys(values).map(item => {
                return setFieldValue(['shipping_' + item], values['']);
            })
        };
        this.setState({
            isBillingAddressSame: !this.state.isBillingAddressSame
        })
    }

    render() {
        const { fieldSet } = this.props;
        return (
            <div className="billingForm">
                <Formik
                    onSubmit={this.submitForm}
                >
                    {

                        ({ errors,setFieldValue, isSubmitting, handleChange, values={} }) => {
                            return <Form
                                className="form-details">
                                <fieldset>
                                    <legend>{fieldSet}</legend>
                                    <ul>
                                        <li>
                                            <label>
                                                <p>Name:</p>
                                                <Field
                                                    className="input-fields"
                                                    name="username"
                                                    validate={ validateName }
                                                    placeholder="Enter Name"
                                                    value={values.username}
                                                    onChange={handleChange}
                                                />
                                                { errors.username
                                                &&
                                                <div className="errors">
                                                    {errors.username}
                                                </div>
                                                }
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <p>Email:</p>
                                                <Field
                                                    className="input-fields"
                                                    name="email"
                                                    type="email"
                                                    validate={validateEmail}
                                                    placeholder="Enter your E-mail"
                                                    onChange={handleChange}
                                                />
                                                { errors.email
                                                &&
                                                <div className="errors">
                                                    {errors.email}
                                                </div>
                                                }
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <p>City:</p>
                                                <Field
                                                    className="input-fields"
                                                    name="city"
                                                    placeholder = "Enter City"
                                                />
                                                {
                                                    errors.city
                                                    &&
                                                    <div
                                                        className="errors">
                                                        {errors.city}
                                                    </div>
                                                }
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <p>Address:</p>
                                                <Field
                                                    className="input-fields"
                                                    name="address"
                                                    placeholder = "Enter Your Address"
                                                />
                                                {
                                                    errors.address
                                                    &&
                                                    <div
                                                        className="errors">
                                                        {errors.address}
                                                    </div>
                                                }
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <p>PinCode:</p>
                                                <Field
                                                    className="input-fields"
                                                    name="pincode"
                                                    validate={ validateZip }
                                                    placeholder = "Enter PinCode"
                                                />
                                                {
                                                    errors.pincode
                                                    &&
                                                    <div
                                                        className="errors">
                                                        {errors.pincode}
                                                    </div>
                                                }
                                            </label>
                                        </li>
                                        <li>
                                            <label><p>Country:</p>
                                                <Field component="select" name="country">
                                                    <option value="India">India</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="USA">USA</option>
                                                </Field>
                                            </label>
                                        </li>
                                    </ul>
                                </fieldset>

                                <label className="check">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => this.handleShippingAddressCheckbox(setFieldValue, values)}
                                    />

                                    <span>Same as Billing</span>
                                </label>

                                <fieldset className="shipping billingForm">
                                    <legend>Shipping Address</legend>
                                    <ul>
                                        <li>
                                            <label>
                                                <p>Name:</p>
                                                <Field
                                                    className="input-fields"
                                                    name="shipping_username"
                                                    validate={validateName}
                                                    disabled={this.state.isBillingAddressSame || this.state.isSubmitted}
                                                />
                                                {errors.username &&
                                                <div className="errors">{errors.username}</div>
                                                }
                                            </label>
                                        </li>

                                        <li>
                                            <label><p>Email:</p>
                                                <Field
                                                    className="input-fields"
                                                    name="shipping_email"
                                                    validate={validateEmail}
                                                    disabled={this.state.isBillingAddressSame || this.state.isSubmitted}
                                                />
                                                {
                                                    errors.email &&
                                                    <div className="errors">{errors.email}</div>
                                                }
                                            </label>

                                        </li>
                                        <li>
                                            <label>
                                                <p>City:</p>
                                                <Field
                                                    className="input-fields"
                                                    name="shipping_city"
                                                    disabled={this.state.isBillingAddressSame || this.state.isSubmitted}
                                                />
                                            </label>

                                        </li>
                                        <li>
                                            <label><p>Address:</p>
                                                <Field
                                                    className="input-fields"
                                                    name="shipping_address"
                                                    disabled={this.state.isBillingAddressSame || this.state.isSubmitted}
                                                />
                                            </label>
                                        </li>
                                        <li>
                                            <label><p>PinCode:</p>
                                                <Field
                                                    className="input-fields"
                                                    name="shipping_pincode"
                                                    validate={validateZip}
                                                    disabled={this.state.isBillingAddressSame || this.state.isSubmitted}

                                                />
                                                {
                                                    errors.pincode &&
                                                    <div className="errors">{errors.pincode}</div>
                                                }
                                            </label>
                                        </li>
                                        <li>
                                            <label><p>Country:</p>
                                                <Field
                                                    component="select"
                                                    name="country"
                                                    disabled={this.state.isBillingAddressSame || this.state.isSubmitted}
                                                >
                                                    <option value="India">India</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="USA">USA</option>
                                                </Field>
                                            </label>
                                        </li>
                                            <button
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                    </ul>
                                </fieldset>

                                <input
                                    onClick={this.handleClick}
                                    type="button"
                                    className="placeOrder"
                                    disabled={!this.state.isSubmitted}
                                    value="place order"
                                />
                            </Form>

                        }}
                </Formik>
            </div>
        );
    }
}

const mapDispatchToProps = ({
    billingAction,
})
export default connect(null,mapDispatchToProps)(BillingForm);