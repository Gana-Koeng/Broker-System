
//Pages 

import Navbar from "./Navbar";
import Sell from "./Sell";
import Buy from "./Buy";
import Select from "./Order";
import Login from "./Login";
import SignUp from "./SignUp";
import OrderSell from "./OrderSell";
import OrderBuy from "./OrderBuy";
import OrderChange from "./OrderChange";
import OrderCancel from "./OrderCancel";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // const title = "Hello Crush, Can we date, Lin?";
  // const likes = 50;
  // const link = "https://www.google.com";
  //const person = { name: 'Phalin', age: '20'}

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

          <Route exact path="/Login">
            <Login />
          </Route>
          
          <Route exact path="/SignUp">
            <SignUp />
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
