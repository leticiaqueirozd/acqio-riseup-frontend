import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .botao {
    width: 10%;
    height: 35px;
    margin-left: 1135px;
    margin-top: -50px;
}
  .pag {
    margin-top: -450px;
    width: 300px;
    height: 370px;
    padding: 40px;
    border-radius: 10px;
    background-color: #ffd14e;
    margin-left: 36.5%;
    -webkit-box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
    -moz-box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
    box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
  }
  .formulario {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    input {
    border: none;
    color: #1e1e1e;
    background-color: #ffff;
    border-radius: 3px;
    height: 35px;
    width: 90%;
    padding-left: 10px;
    margin-left: 12px;
  }
    .lado {
    width: 45%;
}
    .outrolado {
    width: 45%;
}

    
}
.validade {
        margin-top: 15px;
        margin-left: 100px;
        font-weight: 700;
    }
    .loja {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        
    }
    .logoloja {
        margin-top: -90px;
        margin-right: 10px;
    }
    .nomeloja{
        margin-right: 240px;
        margin-top: -55px;
        font-size: 25px;
    }
 
    .infos {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        margin-left: 100px;
        background-color: whitesmoke;
        border-radius: 10px;
        width: 350px ;
        height: 450px;
        -webkit-box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
        -moz-box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
        box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
        & p {
            margin-left: 40px;
            margin-top: 40px;
            margin-bottom:-40px;
            font-size: 20px;
        }
        .nome {
            margin-top: 60px;
            margin-bottom: 5px;
            margin-left: 40px;
            width: 75%;
        }
        .snome {
            margin-top: 20px;
            margin-bottom: 5px;
            margin-left: 40px;
            width: 75%;
        }
        .fone {
            margin-top: 25px;
            margin-left: 40px;
            width: 75%;
        }
        .cpf {
            margin-top: 25px;
            margin-left: 40px;
            width: 75%;
        }
    }
    .endereco {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-top: -450px ;
        margin-left: 950px;
        background-color: whitesmoke;
        border-radius: 10px;
        width: 350px ;
        height: 450px;
        -webkit-box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
        -moz-box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
        box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
        & p {
            margin-left: 40px;
            margin-top: -50px;
            margin-bottom: 20px;
            font-size: 20px;
        }
        .cep {
            margin-bottom: 25px;
            width: 75%;
            margin-left: 40px;
        }
        .rua {
            margin-bottom: 25px ;
            width: 75%;
            margin-left: 40px;
        }
        .numero {
            margin-bottom: 25px ;
            width: 75%;
            margin-left: 40px;
        }
        .bairro {
            margin-bottom: 25px ;
            width: 75%;
            margin-left: 40px;
        }
        .complemento {
            margin-bottom: 65px ;
            width: 75%;
            margin-left: 40px;
        }
    }
`;

export const Header = styled.div`
  margin-top: 56px;
  margin-left: 56px;
`;

export const CustomInput = styled.input`
  background-color: transparent;
  width: 100%;
  border-width: 0px 0px 1px 0px;
  border-color: #ff8500;
  text-decoration: none;
  color: #fff;
`;

export const Search = styled.div`
  display: flex;
  width: 86vw;
  margin-top: 42px;
  margin-left: 56px;
  flex-direction: row;
  gap: 13px;
`;
export const List = styled.div`
  width: 86vw;
  margin-top: 42px;
  margin-left: 56px;
  .iconeStatus {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }
  .itemDescriptionTitle {
    display: flex;
    align-items: center;
  }
  .itemDescription {
    margin-top: 8px;
  }
`;

export const Pendente = styled.div`
  display: flex;
  background-color: #29292e;
  border-radius: 50px;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;

  
`;