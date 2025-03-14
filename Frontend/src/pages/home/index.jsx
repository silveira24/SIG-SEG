import { Link } from "react-router-dom"

import Cabecalho from "../../components/cabecalho"

function Home() {
    return(
        <>
            <Cabecalho titulo={"Home"}></Cabecalho>           

            <div className="w-1/3 shadow-md rounded-lg place-self-center flex flex-col items-center gap-3 mt-10 p-5">
                    <h1 className="text-3xl font-bold mb-5">Páginas do site</h1>
                    <Link className="w-full" to={"/area-servidor"}><button className="w-full border border-gray-300 font-semibold rounded-2xl px-5 py-2 hover:text-blue-400 cursor-pointer">Área do Servidor</button></Link>
                    <Link className="w-full" to={"/registro-denuncia"}><button className="w-full border border-gray-300 font-semibold rounded-2xl px-5 py-2 hover:text-blue-400 cursor-pointer">Registrar Denúncia</button></Link>
                    <Link className="w-full" to={"/busca-denuncia"}><button className="w-full border border-gray-300 font-semibold rounded-2xl px-5 py-2 hover:text-blue-400 cursor-pointer">Buscar Denúncia</button></Link>
            </div>
        </>
    )
}

export default Home