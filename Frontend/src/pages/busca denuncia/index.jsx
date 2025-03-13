import { useRef, useState } from "react"

import Cabecalho from "../../components/cabecalho"
import api from "../../services/api"

const TIPOS_DENUNCIA = {
    VIOLENCIA_DOMESTICA: "Violência doméstica",
    ASSEDIO: "Assédio",
    ROUBO: "Roubo ou furto",
    INFRAESTRUTURA: "Problemas de infraestrutura",
    AMBIENTAL: "Crimes ambientais",
    OUTROS: "Outros"
}

const BAIRROS = {
    ALECRIM: "Alecrim",
    AREIA_PRETA: "Areia Preta",
    BARRO_VERMELHO: "Barro Vermelho",
    BOM_PASTOR: "Bom Pastor",
    CANDELARIA: "Candelária",
    CAPIM_MACIO: "Capim Macio",
    CIDADE_ALTA: "Cidade Alta",
    CIDADE_DA_ESPERANCA: "Cidade da Esperança",
    CIDADE_NOVA: "Cidade Nova",
    DIX_SEPT_ROSADO: "Dix-Sept Rosado",
    EXTREMOZ: "Extremoz",
    FELIPE_CAMARAO: "Felipe Camarão",
    GUARARAPES: "Guararapes",
    IGAPO: "Igapó",
    LAGOA_AZUL: "Lagoa Azul",
    LAGOA_NOVA: "Lagoa Nova",
    LAGOA_SECA: "Lagoa Seca",
    MACAIBA: "Macaíba",
    MAE_LUIZA: "Mãe Luiza",
    NEOPOLIS: "Neópolis",
    NORDESTE: "Nordeste",
    NOVA_DESCOBERTA: "Nova Descoberta",
    NOSSA_SENHORA_DA_APRESENTACAO: "Nossa Senhora da Apresentação",
    NOSSA_SENHORA_DE_NAZARE: "Nossa Senhora de Nazaré",
    PAJUCARA: "Pajuçara",
    PARNAMIRIM: "Parnamirim",
    PETROPOLIS: "Petrópolis",
    PITIMBU: "Pitimbu",
    PLANALTO: "Planalto",
    PONTA_NEGRA: "Ponta Negra",
    POTENGI: "Potengi",
    PRAIA_DO_MEIO: "Praia do Meio",
    QUINTAS: "Quintas",
    REDINHA: "Redinha",
    RIBEIRA: "Ribeira",
    ROCAS: "Rocas",
    SALINAS: "Salinas",
    SANTOS_REIS: "Santos Reis",
    SAO_GONCALO_DO_AMARANTE: "São Gonçalo do Amarante",
    TIROL: "Tirol",
}

const STATUS = {
    RECEBIDA: "Recebida",
    ANALISE: "Análise",
    ANDAMENTO: "Andamento",
    CONCLUIDA: "Concluída",
    ARQUIVADA: "Arquivada"
}

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