import '../components/Cadastro.css'
import Button from 'react-bootstrap/Button';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Computer from '../img/images.jpg'
import { useNavigate } from "react-router-dom";

function  Cadastro() {
  const navigate = useNavigate();
    return(
        <>
        <div className='tela-login'>
        
        <div className='panfleto-login'>
            <h1 className='inicio'>Bem-Vindo!</h1>
            <h1 className='cadastro-novo'>Novo Cadastro</h1>
        </div>
        <div className="background-login">
            <h1 className='faz-cadastro'>CADASTRO CLIENTE</h1>
        </div>
        <div className='teste'>
        <Button onClick={() => navigate("/Formularios")} className='botao-entrar' variant="primary" size="lg" active>
        Entrar
      </Button>
      </div>
      <div className='label-login'>
      <input style={{border: "2px solid black"}} type="text" placeholder="Login" className="input" />;
      </div>
      <div className='label-senha'>
      <input style={{border: "2px solid black"}} type="text" placeholder="Senha" className="input" />;
      </div>
        <div className='botao'>
        <div className="d-flex gap-2 mb-2">
        <Button onClick={() => navigate("/")} className='botao-logar' variant="secondary" size="lg">
          Login
        </Button>
        </div>
        <div className='icons'>
        <FaWhatsapp size={30} />
        <FaInstagram size={30} />
        </div>
        <div className='image'>
        <img src={Computer} alt="" />
        </div>
        </div>
        </div>

        </>
    )
    
}

export default Cadastro;

