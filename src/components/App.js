
import Navbar from "./Navbar";
import Sell from "./Sell";
import Buy from "./Buy";
import Select from "./Select";

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

          <Route path="/Order">
            <Select />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
