import React from 'react';
import {NavBarStyled} from "./NavBarStyled";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <NavBarStyled>
            <Link to="/Profile">Profile</Link>
            <Link to="/Messages">Messages</Link>
            <Link to="/login">LogIn</Link>
            <Link to="/Settings">Settings</Link>
        </NavBarStyled>
    );
};

export default NavBar;