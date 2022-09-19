import * as React from "react";
import "./TopNav.scss";
import NavItem from "./Components/NavItem";
import logo from "../../Assets/logo.jpeg";
import { navData } from "../../Data";
export default function TopNav() {
  return (
    <nav className="top-navigation">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-items">
        {navData.map((item, index) => {
          return <NavItem item={item} key={index} />;
        })}
      </ul>
    </nav>
  );
}
