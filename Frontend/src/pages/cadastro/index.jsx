import { useRef } from "react";
import { Link } from "react-router-dom";

import Cabecalho from "../../components/cabecalho"
import api from "../../services/api";

function Cadastro() {
    const nomeRef = useRef()
    const emailRef = useRef()
    const senhaRef = useRef()

    async function cadastrar() {
        if(nomeRef.current.value  && emailRef.current.value && senhaRef.current.value) {
            const dados = {
                nome: nomeRef.current.value,
                email: emailRef.current.value,
                senha: senhaRef.current.value
            }
            try {
                const response = await api.post('/usuario', dados)
                alert("Email cadastrado com sucesso")
            } catch (error) {
                if(error.response.data ==="Email já cadastrado") {
                    alert(error.response.data)               
                } else if (error.response){
                    alert("Email inválido")
                } else if (error.request) {
                    alert("Erro de conexão com o servidor.")
                } else {
                    alert("Erro inesperado: " + error.message);
                }
            }
        } else {
            alert("preencha todos os campos")
        }
    }

    return (
        <>
            
            <Cabecalho titulo="Cadastro" />
            <form className="w-md justify-self-center flex flex-col items-center gap-4 shadow-md p-8 rounded-lg mt-5">
                <input ref={nomeRef} placeholder="Nome" type="text" className="w-full h-10 p-5 border border-gray-300 rounded-md focus:outline-none"/>
                <input ref={emailRef} placeholder="Email" type="email" className="w-full h-10 p-5 border border-gray-300 rounded-md focus:outline-none"/>
                <input ref={senhaRef} placeholder="Senha" type="password" className="w-full h-10 p-5 border border-gray-300 rounded-md focus:outline-none"/>
                <button onClick={(e) => {e.preventDefault(); cadastrar()}} className="w-1/3 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer rounded-4xl p-2 mt-4">Cadastrar-se</button>
                <Link to="/login" className="text-blue-500 hover:underline">Já tem cadastro? Faça o login</Link>
            </form>
        </>
    )
}

export default Cadastro;