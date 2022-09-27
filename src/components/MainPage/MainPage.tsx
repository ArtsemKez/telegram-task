import React from 'react';
import LogInPage from "../LogInPage/LogInPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import SettingsPage from "../SettingsPage/SettingsPage";
import MessagesPage from "../MessagePage/MessagesPage";
import {ContentBlock, MainPageStyled, NavBarBlock} from "./MainPageStyled";
import NavBar from "./NavBar/NavBar";

const MainPage = () => {
    return (
        <MainPageStyled>
            <NavBarBlock>
                <NavBar/>
            </NavBarBlock>
            <ContentBlock>
                <LogInPage/>
                <ProfilePage/>
                <SettingsPage/>
                <MessagesPage/>
            </ContentBlock>
        </MainPageStyled>
    );
};



export default MainPage;