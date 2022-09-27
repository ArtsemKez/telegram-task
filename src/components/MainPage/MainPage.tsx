import React from 'react';
import LogInPage from "../LogInPage/LogInPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import SettingsPage from "../SettingsPage/SettingsPage";
import MessagesPage from "../MessagePage/MessagesPage";
import {ContentBlock, MainPageStyled, NavBarBlock} from "./MainPageStyled";
import NavBar from "./NavBar/NavBar";
import {Route, Routes} from "react-router-dom";

const MainPage = () => {
    return (
        <MainPageStyled>
            <NavBarBlock>
                <NavBar/>
            </NavBarBlock>
            <ContentBlock>
                <Routes>
                    <Route path="/Profile" element={<ProfilePage/>}/>
                    <Route path="/Settings" element={<SettingsPage/>}/>
                    <Route path="/Messages" element={<MessagesPage/>}/>
                    <Route path="/LogIn" element={<LogInPage/>}/>
                </Routes>
            </ContentBlock>
        </MainPageStyled>

    );
};


export default MainPage;