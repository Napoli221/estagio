import Background from "../components/Background";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

function  Home() {
    const navigate = useNavigate();
    return (
        <>
        <Background/>
       <Login/>
       </>
    )
}

export default Home;