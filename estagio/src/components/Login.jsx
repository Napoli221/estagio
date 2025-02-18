import '../components/Login.css'
import Button from 'react-bootstrap/Button';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Computer from '../img/images.jpg'
import { useNavigate } from "react-router-dom";

function  Login() {
  const navigate = useNavigate();
    return(
        <>
        <div className='tela-login'>
        
        <div className='panfleto-login'>
            <h1 className='inicio'>Bem-Vindo!</h1>
            <h1 className='login-novo'>Novo Login</h1>
        </div>
        <div className="background-login">
            <h1 style={{color: "black"}} className='faz-login'>FAÇA O LOGIN</h1>
        </div>
        <div className='teste'>
        <Button onClick={() => navigate("/Formularios")} className='botao-entrar' variant="primary" size="lg" active>
        Entrar
      </Button>
      </div>
      <div className='label-login'>
      <input type="text" style={{border: "2px solid black"}} placeholder="Login" className="input" />;
      </div>
      <div className='label-senha'>
      <input type="text" style={{border: "2px solid black"}}  placeholder="Senha" className="input" />;
      </div>
        <div className='botao'>
        <div className="d-flex gap-2 mb-2">
        <Button onClick={() => navigate("/Cadastrar")} variant="secondary" size="lg">
          Criar Conta
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

export default Login;

