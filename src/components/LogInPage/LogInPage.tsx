import React from 'react';
import {LogInPageStyled} from "./LogInPageStyled";
import {logInSlice} from "../../store/reducers/logInReducer/LogInSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";

const LogInPage = () => {

    const {count} = useAppSelector(state => state.logInReducer)
    const {counter} = logInSlice.actions
    const dispatch = useAppDispatch()

    return (
        <LogInPageStyled>
            {count}
            <br/>
            <button onClick={() => {dispatch(counter(5))}}>counter</button>
        </LogInPageStyled>
    );
};

export default LogInPage;