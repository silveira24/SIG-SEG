import { Navigate } from "react-router-dom";
import Denuncias from "./denuncias";
import api from "../../services/api";

function AreaServidor() {
    const token = localStorage.getItem("token")
    
    async function validarToken(token) {
        try {
            const response = await api.post(`/usuario/${token}`)
            return true
        } catch (error) {
            return false
        }
    } 

    if(token) {
        if(validarToken(token)) {
            return <Denuncias />
        }
    }

    return <Navigate to={"/login"}/>
}

export default AreaServidor