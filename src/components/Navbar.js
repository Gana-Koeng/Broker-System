// import logo from '../logo.jpg';
import "../style/Navbar.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul class="menu">
        <li>
          <a
            style={{ color: "white", paddingLeft: 13, textDecoration: "none" }}
            href="/"
          >
            Home
          </a>
        </li>

        <li>
          Stock
          <ul class="sub-menu">
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/list-order"
              >
                List Order
              </a>
            </li>
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/list-trader"
              >
                List Trade
              </a>
            </li>
          </ul>
        </li>
        <li>
          Top
          <ul class="sub-menu">
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/top-sell"
              >
                Top Sell
              </a>
            </li>
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/top-buy"
              >
                Top Buy
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a
            style={{ color: "white", paddingLeft: 13, textDecoration: "none" }}
            href="/Order/Sell"
          >
            Make Order
          </a>
        </li>

        <li>
          <a
            style={{ color: "white", paddingLeft: 13, textDecoration: "none" }}
            href="/record"
          >
            Record Trade
          </a>
        </li>

        <li>
          <a
            style={{ color: "white", paddingLeft: 13, textDecoration: "none" }}
            href="/Login"
          >
            Sign In
          </a>
          {/* <ul class="sub-menu">
            <li>Apple Music</li>
            <li>iTunes</li>
          </ul> */}
        </li>

        <li>
          Setting
          <ul class="sub-menu">
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/Deposit"
              >
                Deposit
              </a>{" "}
            </li>
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/withdraw"
              >
                Withdraw
              </a>{" "}
            </li>
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/edit-profile"
              >
                Edit Profile
              </a>{" "}
            </li>
            <li>
              <a
                style={{
                  color: "white",
                  paddingLeft: 13,
                  textDecoration: "none",
                }}
                href="/logout"
              >
                Sign Out
              </a>{" "}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
