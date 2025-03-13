import Cabecalho from "../../components/cabecalho"

function BuscaDenuncia() {
    return(
        <>
            <Cabecalho titulo={"Burcar Denúncia"} />
            <form className="w-md justify-self-center flex flex-col items-center gap-8 shadow-md p-8 rounded-lg mt-5">
                <input placeholder="Localizador" type="text" className="w-full h-6 p-4 border border-gray-300 rounded-md focus:outline-none"/>
                <button className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer rounded-4xl p-2">Buscar</button>
            </form>
        </>
    )
}

export default BuscaDenuncia