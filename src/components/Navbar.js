import logo from '../logo.jpg';
import "../style/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">

            <a href="/"><img src={logo} width={100} height={100} /></a>

            <div class="links">
                <a class="order" href="/Order">Make Order</a>
                <a class="account" href="/Account">Account</a>
            </div>

        </nav>
    );
}

export default Navbar;