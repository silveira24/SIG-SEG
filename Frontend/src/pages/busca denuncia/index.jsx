import { useRef, useState } from "react"

import Cabecalho from "../../components/cabecalho"
import api from "../../services/api"

import {TIPOS_DENUNCIA} from "../../constantes/TIPOS_DENUNCIA"
import {BAIRROS} from "../../constantes/BAIRROS"
import {STATUS} from "../../constantes/STATUS"

function BuscaDenuncia() {
    const localizadorRef = useRef()

    const [denuncia, setDenuncia] = useState(null)
    const [mostrarDenuncia, setMostrarDenuncia] = useState(false);


    async function buscarDenuncia() {
        try {
            const response = await api.get(`/denuncia/${localizadorRef.current.value}`)
            setDenuncia(response.data)
            setMostrarDenuncia(true)
        } catch (error) {
            alert(error.message)
            setMostrarDenuncia(false)
        }
    }

    function formatarData(data) {
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    }

    return(
        <>
            <Cabecalho titulo={"Burcar Denúncia"} />
            <form className="w-md justify-self-center flex flex-col items-center gap-8 shadow-md p-8 rounded-lg mt-5">
                <input ref={localizadorRef} placeholder="Localizador" type="text" className="w-full h-6 p-4 border border-gray-300 rounded-md focus:outline-none"/>
                <button onClick={(e) => {e.preventDefault(); buscarDenuncia()}} className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer rounded-4xl p-2">Buscar</button>
            </form>

            {mostrarDenuncia && denuncia && (

                <div className="denuncia w-md justify-self-center flex flex-col items-center gap-8 shadow-md p-8 rounded-lg mt-10">
                    <h1 className="text-xl font-semibold mb-3">Informações da denúncia</h1>
                    <div className="px-10 flex flex-col gap-3 items-start">
                        <p><span className="font-bold">Localizador:</span> {denuncia.id}</p>
                        <p><span className="font-bold">Tipo:</span> {TIPOS_DENUNCIA[denuncia.tipoDenuncia]}</p>
                        <p><span className="font-bold">Descrição:</span> {denuncia.descricao}</p>
                        <p><span className="font-bold">Bairro:</span> {BAIRROS[denuncia.bairro]}</p>
                        <p><span className="font-bold">Data:</span> {formatarData(denuncia.data)}</p>
                        <p><span className="font-bold">Status:</span> {STATUS[denuncia.status]}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default BuscaDenuncia