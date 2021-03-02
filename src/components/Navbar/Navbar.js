import React from "react";
import * as ROUTES from "../../constants/route";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__list">
        <li className="Navbar__list__items">
          <Link to={ROUTES.HOME} className="Navbar__list__anchor">HOME</Link>
        </li>

        <li className="Navbar__list__items">
          <Link to={ROUTES.ABOUT} className="Navbar__list__anchor">ABOUT</Link>
        </li>

        <li className="Navbar__list__items">
          <Link to={ROUTES.PLAN} className="Navbar__list__anchor">PLAN</Link>
        </li>
    

     
        <li className="Navbar__list--login">
          <Link to={ROUTES.LOGIN} className="Navbar__list__anchor">LOG IN</Link>
        </li>
          <li className="Navbar__list--Signup">
          <Link to={ROUTES.SIGNUP} className="Navbar__list__anchor">SIGN UP</Link>
        </li>
       </ul>
    </div>
  );
};

export default Navbar;
