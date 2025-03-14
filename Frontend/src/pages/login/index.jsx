import { useRef } from "react"
import Cabecalho from "../../components/cabecalho"
import { Link, useNavigate } from "react-router-dom"
import api from "../../services/api"
import { useAuth } from "../../contexts/AuthContext"

function Login() {

    const emailRef = useRef()
    const senhaRef = useRef()
    const {login} = useAuth()
    const navigate = useNavigate()

    async function logar() {
        if(emailRef.current.value && senhaRef.current.value) {
            const dados = {
                email: emailRef.current.value,
                senha: senhaRef.current.value
            }
            try {
                const response = await api.post("/usuario/login", dados)
                login()
                navigate("/area-servidor")
            } catch (error) {
                console.log("Erro ao fazer login: " + (error.response?.data || error.message));
            }
        } else {
            alert("preencha todos os campos")
        }
    }

    return (
        <>
            <Cabecalho titulo={"Login"}/>

            <form className="w-md justify-self-center flex flex-col items-center gap-4 shadow-md p-8 rounded-lg mt-5">
                <input ref={emailRef} placeholder="Email" type="email" className="w-full h-10 p-5 border border-gray-300 rounded-md focus:outline-none"/>
                <input ref={senhaRef} placeholder="Senha" type="password" className="w-full h-10 p-5 border border-gray-300 rounded-md focus:outline-none"/>
                <button onClick={(e) => {e.preventDefault(); logar()}} className="w-1/3 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer rounded-4xl p-2 mt-4">Entrar</button>
                <Link to="/cadastro" className="text-blue-500 hover:underline">Ainda não tem cadastro? Cadastre-se</Link>
            </form>
        </>
    )
}

export default Login