import { useState, useEffect } from "react"

import Cabecalho from "../../components/cabecalho"
import api from "../../services/api"

import {TIPOS_DENUNCIA} from "../../constantes/TIPOS_DENUNCIA"
import {BAIRROS} from "../../constantes/BAIRROS"
import {STATUS} from "../../constantes/STATUS"

function Denuncias() {
    const [denuncias, setDenuncias] = useState([])

    async function mostrarDenuncias() {
        try {
            const response = await api.get("/denuncia")
            setDenuncias(response.data)
        } catch (error) {
            alert("erro ao carregar denuncias")
        }
    }

    useEffect(() => {
        mostrarDenuncias();
    }, []);

    function formatarData(data) {
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    }

    return (
        <>
            <div>
                <Cabecalho titulo={"Denúncias Registradas"}/>
                
                {denuncias.map((denuncia) => (
                    <div className="w-md justify-self-center shadow-md py-8 rounded-lg mt-10 px-10 flex flex-col gap-3 items-start ">
                            <p><span className="font-bold">Localizador:</span> {denuncia.id}</p>
                            <p><span className="font-bold">Tipo:</span> {TIPOS_DENUNCIA[denuncia.tipoDenuncia]}</p>
                            <p><span className="font-bold">Descrição:</span> {denuncia.descricao}</p>
                            <p><span className="font-bold">Bairro:</span> {BAIRROS[denuncia.bairro]}</p>
                            <p><span className="font-bold">Data:</span> {formatarData(denuncia.data)}</p>
                            <p><span className="font-bold">Status:</span> {STATUS[denuncia.status]}</p>
                    </div>

                ))}     
            </div>
        </>
    )
}

export default Denuncias;