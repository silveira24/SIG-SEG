import Cabecalho from "../../components/cabecalho"
import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <Cabecalho titulo={"Login"}/>

            <form className="w-md justify-self-center flex flex-col items-center gap-4 shadow-md p-8 rounded-lg mt-5">
                <input placeholder="Email" type="email" className="w-full h-10 p-5 border border-gray-300 rounded-md focus:outline-none"/>
                <input placeholder="Senha" type="password" className="w-full h-10 p-5 border border-gray-300 rounded-md focus:outline-none"/>
                <button className="w-1/3 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer rounded-4xl p-2 mt-4">Entrar</button>
                <Link to="/cadastro" className="text-blue-500 hover:underline">Ainda não tem cadastro? Cadastre-se</Link>
            </form>
        </>
    )
}

export default Login