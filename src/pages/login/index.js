import React, { useState } from 'react'
import { Container, TextWrapper, ButtonWrapper, CustomInput } from "./styles";
import Logo from "../../assets/acqio.svg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SingIn from "../../services/requests/SignIn";

export default function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    // const resultado = await SingIn(email, password);
    // if (resultado.status != 200) {
    //   return [];
    // }
    // localStorage.setItem("jwt", resultado.message);
    // console.log(resultado.message);
    navigate("/pagamento");
  }

  return (
    <div>
        <Container>
      <div className="superior">
        <img src={Logo} alt="Acqio" />
        <p className="subTitle">Entre e prossiga para o pagamento.</p>
      </div>
      <TextWrapper>
        <CustomInput
          id="email"
          placeholder="Insira seu e-mail"
          style={{ width: '300px', backgroundColor: "transparent", color: '#fff', fontWeight: '500', borderBlockColor: '#ffce43'}}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput className='senha'
          id="password"          
          placeholder="Insira sua senha"
          style={{ width: '300px', backgroundColor: "transparent", color: '#fff', fontWeight: '500', borderBlockColor: '#ffce43'}}
          value={password}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </TextWrapper>
      <ButtonWrapper>
        <Button
          variant="contained"
          style={{ backgroundColor: "#ffce43", color: '#000', fontWeight: '400'}}
          onClick={handleSignIn}
        >
          Finalizar pagamento
        </Button>
      </ButtonWrapper>
    </Container>
    </div>
  )
}
