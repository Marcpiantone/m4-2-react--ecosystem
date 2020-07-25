import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
body {font-family: "Raleway", sans-serif; margin: 40px; font-size: 25px};
a {text-decoration:none}`;

const Text = styled.p``;

const Bold = styled.span`
  font-weight: bolder;
`;

export default GlobalStyle;

export { Text, Bold };
