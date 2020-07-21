import React from "react";
import styled from "styled-components";

const Logo = styled.p`
  font-size: 50px;
  font-weight: bolder;
  margin: 40px;
`;
const Header = (props) => {
  return (
    <header>
      <Logo>Fruit Emporium</Logo>
      <link></link>
    </header>
  );
};

export default Header;
