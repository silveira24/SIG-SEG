import {useRef} from "react";

import Cabecalho from "../../components/cabecalho"
import api from "../../services/api";

function RegistroDenuncia() {
            const tipoRef = useRef();
            const descricaoRef = useRef();
            const bairroRef = useRef();
            const dataRef = useRef();
            const checkboxRef = useRef();

            function handleClickButton() {
                if (tipoRef.current.value && descricaoRef.current.value && bairroRef.current.value && dataRef.current.value) {
                    if (checkboxRef.current.checked) {
                        registrarDenuncia();
                    } else {
                        alert("Confirme a veracidade dos dados");
                    }
                } else {
                    alert("Preencha todos os dados do formulário");
                }
            }

            async function registrarDenuncia() {
                const denuncia = {
                    tipoDenuncia: tipoRef.current.value,
                    descricao: descricaoRef.current.value,
                    bairro: bairroRef.current.value,
                    data: dataRef.current.value
                }

                try {
                    const response = await api.post('/denuncia', denuncia)
                    alert("denúncia registrada com sucesso! guarde o código para ter acesso ao status da denúncia: " + response.data)
                } catch (error) {
                    alert("Erro ao registrar denúncia!")
                }

                tipoRef.current.value = "";
                descricaoRef.current.value = ""
                bairroRef.current.value = ""
                dataRef.current.value = ""
                checkbox.checked = false
            }

    return (
        <>
            <Cabecalho titulo={"Registro de Denúncia"} />
            <form className="w-md justify-self-center flex flex-col items-center gap-8 shadow-md p-8 rounded-lg mt-5">
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-semibold mb-6">Informações da denúncia</h1>
                    <div className="w-full mb-3">
                        <label className="font-semibold mr-3">Tipo de denúncia:</label>
                        <select ref={tipoRef} name="classificacao" id="classificacao" className="w-full border border-gray-300 rounded-md p-2 mt-1">
                            <option value="">Selecione...</option>
                            <option value="VIOLENCIA_DOMESTICA">Violência doméstica</option>
                            <option value="ASSEDIO">Assédio</option>
                            <option value="ROUBO">Roubo ou furto</option>
                            <option value="INFRAESTRUTURA">Problemas de infraestrutura</option>
                            <option value="AMBIENTAL">Crimes ambientais</option>
                            <option value="OUTROS">Outros</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col items-start mb-3">
                        <label className="font-semibold mb-1">Descreva o ocorrido:</label>
                        <textarea ref={descricaoRef} placeholder="Digite aqui..." className="w-full min-h-20 p-1 border border-gray-300 rounded-md focus:outline-none "/>
                    </div>
                    <div className="w-full mb-3">
                        <label className="font-semibold mr-3">Bairro do ocorrido:</label>
                        <select ref={bairroRef} name="bairro" id="bairro" className="border border-gray-300 rounded-md p-2 w-full mt-1">
                            <option value="">Selecione...</option>
                            <option value="ALECRIM">Alecrim</option>
                            <option value="AREIA_PRETA">Areia Preta</option>
                            <option value="BARRO_VERMELHO">Barro Vermelho</option>
                            <option value="BOM_PASTOR">Bom Pastor</option>
                            <option value="CANDELARIA">Candelária</option>
                            <option value="CAPIM_MACIO">Capim Macio</option>
                            <option value="CIDADE_ALTA">Cidade Alta</option>
                            <option value="CIDADE_DA_ESPERANCA">Cidade da Esperança</option>
                            <option value="CIDADE_NOVA">Cidade Nova</option>
                            <option value="DIX_SEPT_ROSADO">Dix-Sept Rosado</option>
                            <option value="EXTREMOZ">Extremoz</option>
                            <option value="FELIPE_CAMARAO">Felipe Camarão</option>
                            <option value="GUARARAPES">Guararapes</option>
                            <option value="IGAPO">Igapó</option>
                            <option value="LAGOA_AZUL">Lagoa Azul</option>
                            <option value="LAGOA_NOVA">Lagoa Nova</option>
                            <option value="LAGOA_SECA">Lagoa Seca</option>
                            <option value="MACAIBA">Macaíba</option>
                            <option value="MAE_LUIZA">Mãe Luiza</option>
                            <option value="NEOPOLIS">Neópolis</option>
                            <option value="NORDESTE">Nordeste</option>
                            <option value="NOVA_DESCOBERTA">Nova Descoberta</option>
                            <option value="NOSSA_SENHORA_DA_APRESENTACAO">Nossa Senhora da Apresentação</option>
                            <option value="NOSSA_SENHORA_DE_NAZARE">Nossa Senhora de Nazaré</option>
                            <option value="PAJUCARA">Pajuçara</option>
                            <option value="PARNAMIRIM">Parnamirim</option>
                            <option value="PETROPOLIS">Petrópolis</option>
                            <option value="PITIMBU">Pitimbu</option>
                            <option value="PLANALTO">Planalto</option>
                            <option value="PONTA_NEGRA">Ponta Negra</option>
                            <option value="POTENGI">Potengi</option>
                            <option value="PRAIA_DO_MEIO">Praia do Meio</option>
                            <option value="QUINTAS">Quintas</option>
                            <option value="REDINHA">Redinha</option>
                            <option value="RIBEIRA">Ribeira</option>
                            <option value="ROCAS">Rocas</option>
                            <option value="SALINAS">Salinas</option>
                            <option value="SANTOS_REIS">Santos Reis</option>
                            <option value="SAO_GONCALO_DO_AMARANTE">São Gonçalo do Amarante</option>
                            <option value="TIROL">Tirol</option>
                        </select>
                    </div>

                    <div className="w-full mb-5">
                        <label className="font-semibold mr-3">Dia do ocorrido:</label>
                        <input ref={dataRef} type="date" className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none"/>
                    </div>

                    <div className="flex items-center gap-3">
                        <input ref={checkboxRef} value={"aceito"} name="termos" type="checkbox" />
                        <p className="text-xs font-semibold w-full">
                            Ao clicar, você confirma que todas as informações fornecidas são verídicas.
                        </p>
                    </div>
                </div>
                <button onClick={(e) => {e.preventDefault(); handleClickButton()}} className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer rounded-4xl p-2">Registrar Denúncia</button>
            </form>
        </>
    )
}

export default RegistroDenuncia