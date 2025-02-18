import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

function  Formularios() {
    const navigate = useNavigate();
    return (
        <>
        <Background/>
       <Formulario/>
       </>
    )
}

export default Formularios;