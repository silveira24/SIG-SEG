import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Denuncias from "./denuncias";

function AreaServidor() {
    const {isAuthenticated } = useAuth();
    return isAuthenticated  ? <Denuncias /> : <Navigate to="/login" />;
    
}

export default AreaServidor