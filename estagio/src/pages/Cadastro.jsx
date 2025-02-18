import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import Cadastro from '../components/Cadastro';

function  Cadastrar() {
    const navigate = useNavigate();
    return (
        <>
        <Background/>
       <Cadastro/>
       </>
    )
}

export default Cadastrar;