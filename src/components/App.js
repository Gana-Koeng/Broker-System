
//Pages 

import Navbar from "./Navbar";
import Sell from "./Sell";
import Buy from "./Buy";
import Select from "./Order";
import Login from "./Login";
import Register from "./Register";
import OrderSell from "./OrderSell";
import OrderBuy from "./OrderBuy";
import OrderChange from "./OrderChange";
import OrderCancel from "./OrderCancel";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>

          <Route exact path="/">
            <Sell />
            <Buy />
          </Route>

          <Route exact path="/Order">
            <Select />
          </Route>
          <Route exact path="/Withdraw">
            <Withdraw />
          </Route>
          <Route exact path="/Deposit">
            <Deposit />
          </Route>
          <Route exact path="/Login">
          <div id="root"></div>
              <Login />
            </Route>
            <Route exact path="/Register">
          <div id="root"></div>
              <Register />
            </Route>
          <Route exact path="/Order/Sell">
            <OrderSell />
          </Route>
          <Route exact path="/Order/Buy">
            <OrderBuy />
          </Route>
          <Route exact path="/Order/Change">
            <OrderChange />
          </Route>
          <Route exact path="/Order/Cancel">
            <OrderCancel />
          </Route>


           
           
         
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
