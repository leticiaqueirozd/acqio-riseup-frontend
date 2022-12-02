import Logo from "../../assets/acqio.svg";
import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { Container, Header } from './styles'
import { Row, Col } from "react-bootstrap";
import { TextField, Button } from '@mui/material'

export default function Pagamento() {
    const [number, setNumber] = useState(" ")
    const [name, setName] = useState(" ")
    const [expiry, setExpiry] = useState(" ")
    const [cvc, setCvc] = useState(" ")
    const [focus, setFocus] = useState(" ")

  return (
    <Container>
        <Header>
            <img src={Logo} alt='logoAcqio' width={'150px'} />
            <div className="botao">
            <Button
            variant="contained"
            style={{ backgroundColor: "#ffce43", color: '#1e1e1e', fontWeight: '400'}}
            onClick={() => {
              alert('Pagamento realizado com sucesso!');
            }}
            >
              Finalizar
            </Button>
            </div>
        </Header>
        <div className="dados">
        <div className='infos'>
        <img src='' alt='' />
        <p>Seus Dados</p>
        <TextField className='nome'
          required
          id="outlined-required"
          label="Nome"
          type='text'
          />

        <TextField className='snome'
          required
          id="outlined-required"
          label="Sobrenome"
          type='text'
          />
        
        <TextField className='cpf'
          required
          id="outlined-required"
          label="CPF"
          type='tel'
          />
        <TextField className='fone'
          required
          id="outlined-required"
          label="Telefone"
          type='tel'
          />
        </div>

        <div className='endereco'>
        <img src='' alt='' />
        <p>Endereço de cobrança</p>
        <TextField className='cep'
          required
          id="outlined-required"
          label="CEP"
          type='tel'
          />
        
        <TextField className='rua'
          required
          id="outlined-required"
          label="Endereço"
          type='text'
          />
              
        <TextField className='bairro'
          required
          id="outlined-required"
          label="Bairro"
          type='text'
          />

        <TextField className='complemento'
          required
          id="outlined-required"
          label="Complemento (opcional)"
          type='text'
          />
        

        </div>

        </div>

        <div className="pag">
        <Cards className='cartao'
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus} />
     
        <form className='formulario'>
          <Col>
            <input type='number' name='number' placeholder='Número do cartão' value={number} onChange={e => setNumber(e.target.value)} onFocus={e => setFocus(e.target.name)} />
          </Col>
          <Col>
            <input type='text' name='text' placeholder='Nome do titular' value={name} onChange={e => setName(e.target.value)} onFocus={e => setFocus(e.target.name)} />
          </Col>
          <Row className='lado'>
              <input type='text' name='text' placeholder='MM/AAAA' value={expiry} onChange={e => setExpiry(e.target.value)} onFocus={e => setFocus(e.target.name)} />            
          </Row>
          <Row className='outrolado'>
              <input type='number' name='number' placeholder='CVV' value={cvc} onChange={e => setCvc(e.target.value)} onFocus={e => setFocus(e.target.name)} />          
          </Row>
        </form>
        </div>
    </Container>
  )
}
