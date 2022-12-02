import styled from "styled-components";
import background from '../../assets/bg.png';

export const Container = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #1e1e1e;
  .subTitle {
    text-align: center;
    margin-top: 16px;
    color: white;
    font-weight: 700;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  .forgetPassword {
    align-self: center;
    color: #fff;
    margin-top: 32px;
    font-weight: 700;
  }
`;

export const CustomInput = styled.input`
  background-color: transparent;
  width: 250px;
  height: 24px;
  border-width: 0px 0px 1px 0px;
  border-color: #ff8500;
  text-decoration: none;
  ::-webkit-input-placeholder {
   color: white;
}

`;