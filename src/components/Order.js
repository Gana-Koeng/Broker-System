import "../style/Order.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sell from "./Sell";
import React, { useState } from 'react';
function MyForm() {

  return (
    <div className="App">
      <div className="container">
      <div className="right">
      <div className="title">
          List All Data
        </div>
      <table>
        <tr>
          <th>ID</th>
          <th>Buy</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
		
      </table>
	  
    </div>
    <div className="left">
      
 
        <div className="title">
          Choose Your Option
        </div>
        {/* <div className="main-type"></div> */}
        {/* <label for="type">Type Order: </label> */}
        {/* <select className="type">
            <option value="1">Buy Stock</option>
            <option value="2">Sell Stock</option>
          </select> */}

        {/* <div className="quality">
            <form action="/action_page.php">
              <label for="quality">Quality: </label>
              <input
                type="text"
                id="quality"
                name="quality"
                placeholder="Input quality..."
              />

              <label className="price" for="price">
                Price:{" "}
              </label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Input price..."
              />
            </form>
          </div> */}
        <div className="sub-container">
          <div id="myDIV">


            <button class="btn"> <a
              style={{
                color: "white",
                paddingLeft: 13,
                textDecoration: "none",
              }}
              href="/Order/Sell"
            >
              Sell
            </a></button>
            <button class="btn active">Buy</button>
            <button class="btn">Change</button>
            <button class="btn">Cancel</button>

          </div>
        </div>
        <div className="submit">
          <input type="submit" value="Make Order->>" />
        </div>
        </div>
      </div>
    </div>

  );
}

export default MyForm;