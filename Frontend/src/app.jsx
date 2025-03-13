import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Home from "./pages/home";
import RegistroDenuncia from "./pages/registro de denuncia";
import BuscaDenuncia from "./pages/busca denuncia";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/login" element={<Login />}/>
                <Route path="/registro-denuncia" element={<RegistroDenuncia/>} />
                <Route path="/busca-denuncia" element={<BuscaDenuncia/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;