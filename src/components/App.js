
//Pages 

import Navbar from "./Navbar";
import Home from "./Home";
import RecentTrade from "./RecentTrade";
import Top from "./Top";
import ListOrder from "./ListOrder";
import ListTrade from "./ListTrade";

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
            <Home />
            
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
          <Route exact path="/RecentTrade">
            <RecentTrade />
          </Route>
          <Route exact path="/Top">
            <Top />
          </Route>                
          <Route exact path="/ListOrder">
            <ListOrder />
          </Route>                
          <Route exact path="/ListTrade">
            <ListTrade />
          </Route>                
       </Switch>
      </div>
    </Router>
  );
}

export default App;
