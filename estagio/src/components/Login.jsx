import '../components/Login.css'
import Button from 'react-bootstrap/Button';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Computer from '../img/images.jpg'

function  Login() {

    return(
        <>
        <div className='tela-login'>
        <div className='panfleto-login'>
            <h1 className='inicio'>Bem-Vindo!</h1>
            <h1 className='login-novo'>Novo Login</h1>
        </div>
        <div className="background-login">
            <h1 className='faz-login'>FAÇA LOGIN</h1>
        </div>
        <div className="d-flex gap-2 mb-2">
        <Button className='teste' variant="primary" size="lg">
          Large button
        </Button>
        </div>
        </div>
        <div className='botao'>
        <div className="d-flex gap-2 mb-2">
        <Button variant="secondary" size="lg">
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
        </>
    )
    
}

export default Login;

