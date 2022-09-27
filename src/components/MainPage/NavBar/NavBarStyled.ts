import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavBarStyled = styled.nav`
  background-color: #343333;
  height: 100%;
  max-height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`

export const LinkStyled = styled(Link)`
  outline: none;
  text-decoration: none;
  color: #ffffff;
  padding-top: 10px;

  &:hover {
    color: #a6b0b0;
    font-size: 18px;
  }

  &:active {
    color: #c71d1d;
    font-size: 15px;
  }
`