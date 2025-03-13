import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Home from "./pages/home";
import RegistroDenuncia from "./pages/registro de denuncia";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/login" element={<Login />}/>
                <Route path="/registro-denuncia" element={<RegistroDenuncia/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;