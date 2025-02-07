import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import Cart from "../../pages/Cart/Cart";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Menu");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import { assets } from "../../assets/assets";

// const Navbar = () => {
//     const [menu, setMenu] = useState("Home"); // Changed initial state to "Home"

//     return (
//         <div className="navbar">
//             <img src={assets.logo} alt="" className="logo" />
//             <ul className="navbar-menu">
//                 <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
//                 <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
//                 <li onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</li>
//                 <li onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact Us</li> {/* Replaced space with dash */}
//             </ul>
//             <div className="navbar-right">
//                 <img src={assets.search_icon} alt="" />
//                 <div className="navbar.search_icon">
//                     <img src={assets.basket_icon} alt="" />
//                     <div className="dot"></div>
//                 </div>
//                 <button>SIGN IN</button>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
