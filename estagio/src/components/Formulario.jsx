import '../components/Formulario.css'
import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useMask } from '@react-input/mask';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Imagem from '../img/logo.png'
import { IoArrowBackCircleSharp } from "react-icons/io5";



function Formulario () {
  const navigate = useNavigate();
    const reg = /\d/;
  const ref = useMask({
    mask: '___.___.___-__',
    replacement: { _: reg },
  });
  const foneref = useMask({
    mask: '(__)_____-____',
    replacement: { _: reg },
  });
    return (
       <>
       <div className='nav-bar'>
       <Navbar expand="lg" className="bg-red">
      <Container>
        <img className='logo' src={Imagem} alt="" />
        <div className='voltar' onClick={() => navigate("/")}>
        <IoArrowBackCircleSharp size={50} />
        </div>
      </Container>
    </Navbar>
    </div>
    <div className="Formulario">
    <Form>
      <div className='ajuste-inicio'>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>CPF</Form.Label>
          <Form.Control style={{border: "2px solid black"}} id='input' ref={ref} type="text" placeholder="000.000.000-00" />
        </Form.Group>
        

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Nome</Form.Label>
          <Form.Control style={{border: "2px solid black"}} id='input' type="text" placeholder="Nome" />
        </Form.Group>
      </Row>
      </div>
      <div className='ajuste'>
      <Form.Group className="mb-5" controlId="formGridAddress1">
        <Form.Label>Data de Nascimento</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' placeholder="Data de Nascimento" />
      </Form.Group>
      </div>

      <div className='ajuste-rg'>
      <Form.Group className="mb-4" controlId="formGridAddress3">
        <Form.Label>RG</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' type="text"  placeholder="0.000.000" />
      </Form.Group>
      </div>
      <div className='ajuste-cep'>
      <Form.Group className="mb-4" controlId="formGridAddress3">
        <Form.Label>CEP</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' type="text"  placeholder="00000-000" />
      </Form.Group>
      </div>
      <div className='ajuste-end'>
      <Form.Group className="mb-4" controlId="formGridAddress3">
        <Form.Label>Endereço</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' type="text"  placeholder="Endereço" />
      </Form.Group>
      </div>

    <div className='ajuste-num'>
      <Form.Group className="mb-4" controlId="formGridAddress2">
        <Form.Label>Número</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' ref={foneref} placeholder="(99)99999-9999" />
      </Form.Group>
      </div>
      <div className='ajuste-bairro'>
      <Form.Group className="mb-4" controlId="formGrid">
        <Form.Label>Bairro</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' ref={foneref} placeholder="Bairro" />
      </Form.Group>
      </div>
      <div className='ajuste-uf'>
      <Form.Group className="mb-4" controlId="formGrid">
        <Form.Label>UF</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' ref={foneref} placeholder="Estado" />
      </Form.Group>
      </div>
      <div className='ajuste-cidade'>
      <Form.Group className="mb-4" controlId="formGrid">
        <Form.Label>Cidade</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' ref={foneref} placeholder="Cidade" />
      </Form.Group>
      </div>
      <div className='ajuste-ref'>
      <Form.Group className="mb-4" controlId="formGrid">
        <Form.Label>Ponto de Referência</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' ref={foneref} placeholder="Referência" />
      </Form.Group>
      </div>
      <div className='ajuste-email'>
      <Form.Group className="mb-4" controlId="formGrid">
        <Form.Label>E-mail</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' ref={foneref} type='email' placeholder="Email" />
      </Form.Group>
      </div>
      <div className='ajuste-pai'>
      <Form.Group className="mb-4" controlId="formGrid">
        <Form.Label>Nome do Pai</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' ref={foneref} placeholder="Nome do Pai" />
      </Form.Group>
      </div>
      <div className='ajuste-mae'>
      <Form.Group className="mb-4" controlId="formGrid">
        <Form.Label>Nome da Mãe</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' ref={foneref} placeholder="Nome da Mãe" />
      </Form.Group>
      </div>
      <div className='ajuste-sexo'>
      <Form.Label>Sexo</Form.Label>
      <Form.Select style={{border: "2px solid black"}} className='mb-4' aria-label="Default select example">
      <option>Escolha uma opção</option>
      <option value="1">Masculino</option>
      <option value="2">Feminino</option>
      <option value="3">Não Informar</option>
    </Form.Select>
    </div>
    <div className='ajuste-civil'>
    <Form.Label>Estado Civil</Form.Label>
      <Form.Select style={{border: "2px solid black"}} className='mb-4' aria-label="Default select example">
      <option>Escolha uma opção</option>
      <option value="1">Solteiro(a)</option>
      <option value="2">Casado(a)</option>
      <option value="3">Viúvo(a)</option>
      <option value="4">Divorciado(a)</option>
      <option value="5">Seperado Judicialmente(a)</option>
    </Form.Select>
    </div>
    <div className='ajuste-nomec'>
    <Form.Group className="mb-4" controlId="formGrid">
        <Form.Label>Nome cônjuge</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' placeholder="Nome cônjuge" />
      </Form.Group>
      </div>
      <div className='ajuste-filhos'>
      <Form.Label>Filhos/Dependentes</Form.Label>
      <Form.Select style={{border: "2px solid black"}} className='mb-4' aria-label="Default select example">
      <option>Escolha uma opção</option>
      <option value="1">Sim</option>
      <option value="2">Não</option>
    </Form.Select>
    </div>
    <div className='ajuste-profissao'>
    <Form.Group  className="mb-4" controlId="formGrid">
        <Form.Label>Profissão</Form.Label>
        <Form.Control style={{border: "2px solid black"}} id='input' placeholder="Profissão" />
      </Form.Group>
      </div>
      <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Informação Geral</Form.Label>
        <Form.Control style={{border: "2px solid black"}} as="textarea" rows={3} maxLength={300} />
      </Form.Group>
      <div className='botao-form'>
      <div className="d-flex gap-2 mb-2">
        <Button variant="primary" size="lg">
          Enviar o formulario
        </Button>
        </div>   
        </div> 
    </Form>
    </div>
    </>
  );
};

       
export default Formulario;