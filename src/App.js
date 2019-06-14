import React from 'react';
import CartContainer from './components/cartthumbnail/CartContainer';
import './components/stylesheet/main.css';
import {BrowserRouter as Router , Route} from "react-router-dom";
import CartItem from './components/itemlist/CartItem';
import Checkout from './components/Billing/Checkout';
import OrderConfirm from './components/orderconfirm/OrderConfirm';
import Breadcrumbs from './components/breadCrumb';
import CartView from './components/cartthumbnail/CartView';

function App() {

    return (
        <Router>
            <div className="App">
                <header>
                </header>

                <div className="cartcontainer">
                    <Route
                        path = "/"
                        render = {()=>(<div className="breadCrumb">
                            <Breadcrumbs />
                        </div>)}
                        />
                    <Route
                        exact path="/cart"
                        component={CartItem}
                    />
                    <Route
                        exact path="/Cart/Checkout"
                        component={Checkout}
                    />
                    <Route
                        exact path="/Cart/Checkout/OrderConfirmed"
                        component={OrderConfirm}
                    />
                    <Route
                        exact path="/home"
                        component={CartContainer}
                    />
                    <Route
                        path = "/details/:id"
                        component  = {CartView}
                        />
                    <Route
                        exact path="/"
                        component={CartContainer}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
