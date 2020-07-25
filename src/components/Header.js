import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const HeaderBox = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 50px;
  font-weight: bolder;
`;

const Linkbox = styled.div`
  justify-content: flex-end;
`;

const Links = styled(NavLink)`
  font-weight: bolder;
  font-size: 20px;
  text-decoration: none;
  margin: 10px;
  color: rgb(153, 51, 255);
  &:hover {
    color: rgb(255, 0, 127);
  }
  &.active {
    color: rgb(255, 0, 127);
    border-bottom: solid 2px;
  }
`;
const Header = (props) => {
  return (
    <HeaderBox>
      <Logo>Fruit Emporium</Logo>
      <Linkbox>
        <Links exact to="/">
          Home
        </Links>
        <Links exact to="/about">
          About
        </Links>
      </Linkbox>
    </HeaderBox>
  );
};

export default Header;
