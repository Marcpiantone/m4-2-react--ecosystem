import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
body {font-family: "Raleway", sans-serif; margin: 40px; font-size: 25px}`;

const Text = styled.p``;

const Bold = styled.p`
  font-weight: bolder;
  display: inline;
`;

export default GlobalStyle;

export { Text, Bold };
