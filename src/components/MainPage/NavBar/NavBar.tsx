import React from 'react';
import { LinkStyled, NavBarStyled} from "./NavBarStyled";

const NavBar = () => {
    return (
        <NavBarStyled>
            <LinkStyled to="/Profile">Profile</LinkStyled>
            <LinkStyled to="/Messages">Messages</LinkStyled>
            <LinkStyled to="/login">LogIn</LinkStyled>
            <LinkStyled to="/Settings">Settings</LinkStyled>
        </NavBarStyled>
    );
};

export default NavBar;