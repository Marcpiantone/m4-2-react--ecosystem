import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  font-weight: bolder;
  font-size: 20px;
  a {
    text-decoration: none;
    margin: 10px;
    color: rgb(153, 51, 255);
  }

  & a:hover {
    color: rgb(255, 0, 127);
    border-bottom: solid 2px;
  }
`;

const Header = (props) => {
  return (
    <HeaderBox>
      <Logo>Fruit Emporium</Logo>
      <Linkbox>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Linkbox>
    </HeaderBox>
  );
};

export default Header;
