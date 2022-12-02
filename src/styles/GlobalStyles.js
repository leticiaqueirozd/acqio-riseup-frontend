import { createGlobalStyle } from "styled-components";
import background from '../assets/bg.png';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  text-decoration: none;
}
html {
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
}
`;