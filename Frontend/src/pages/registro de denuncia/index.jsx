import Cabecalho from "../../components/cabecalho"

function RegistroDenuncia() {
    return (
        <>
            <Cabecalho titulo={"Registro de Denúncia"} />
            <form className="w-md justify-self-center flex flex-col items-center gap-8 shadow-md p-8 rounded-lg mt-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold mb-4">Dados pessoais (opcional)</h1>
                    <input placeholder="Nome" type="text" className="w-full h-6 p-4 border border-gray-300 rounded-md focus:outline-none"/>
                    <input placeholder="Telefone" type="tel" className="w-full h-6 p-4 border border-gray-300 rounded-md focus:outline-none"/>
                    <input placeholder="Email" type="email" className="w-full h-6 p-4 border border-gray-300 rounded-md focus:outline-none"/>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-semibold mb-6">Informações da denúncia</h1>
                    <div className="w-full mb-3">
                        <label className="font-semibold mr-3">Tipo de denúncia:</label>
                        <select name="classificacao" id="classificacao" className="w-full border border-gray-300 rounded-md p-2 mt-1">
                            <option value="">Selecione...</option>
                            <option value="Violência doméstica">Violência doméstica</option>
                            <option value="Assédio">Assédio</option>
                            <option value="Roubo ou furto">Roubo ou furto</option>
                            <option value="Problemas de infraestrutura">Problemas de infraestrutura</option>
                            <option value="Crimes ambientais">Crimes ambientais</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col items-start mb-3">
                        <label className="font-semibold mb-1">Descreva o ocorrido:</label>
                        <textarea placeholder="Digite aqui..." className="w-full min-h-20 p-1 border border-gray-300 rounded-md focus:outline-none "/>
                    </div>
                    <div className="w-full mb-3">
                        <label className="font-semibold mr-3">Bairro do ocorrido:</label>
                        <select name="bairro" id="bairro" className="border border-gray-300 rounded-md p-2 w-full mt-1">
                            <option value="">Selecione...</option>
                            <option value="Alecrim">Alecrim</option>
                            <option value="Areia Preta">Areia Preta</option>
                            <option value="Barro Vermelho">Barro Vermelho</option>
                            <option value="Bom Pastor">Bom Pastor</option>
                            <option value="Candelária">Candelária</option>
                            <option value="Capim Macio">Capim Macio</option>
                            <option value="Cidade Alta">Cidade Alta</option>
                            <option value="Cidade da Esperança">Cidade da Esperança</option>
                            <option value="Cidade Nova">Cidade Nova</option>
                            <option value="Dix-Sept Rosado">Dix-Sept Rosado</option>
                            <option value="Extremoz">Extremoz</option>
                            <option value="Felipe Camarão">Felipe Camarão</option>
                            <option value="Guararapes">Guararapes</option>
                            <option value="Igapó">Igapó</option>
                            <option value="Lagoa Azul">Lagoa Azul</option>
                            <option value="Lagoa Nova">Lagoa Nova</option>
                            <option value="Lagoa Seca">Lagoa Seca</option>
                            <option value="Macaíba">Macaíba</option>
                            <option value="Mãe Luiza">Mãe Luiza</option>
                            <option value="Neópolis">Neópolis</option>
                            <option value="Nordeste">Nordeste</option>
                            <option value="Nova Descoberta">Nova Descoberta</option>
                            <option value="Nossa Senhora da Apresentação">Nossa Senhora da Apresentação</option>
                            <option value="Nossa Senhora de Nazaré">Nossa Senhora de Nazaré</option>
                            <option value="Pajuçara">Pajuçara</option>
                            <option value="Parnamirim">Parnamirim</option>
                            <option value="Petrópolis">Petrópolis</option>
                            <option value="Pitimbu">Pitimbu</option>
                            <option value="Planalto">Planalto</option>
                            <option value="Ponta Negra">Ponta Negra</option>
                            <option value="Potengi">Potengi</option>
                            <option value="Praia do Meio">Praia do Meio</option>
                            <option value="Quintas">Quintas</option>
                            <option value="Redinha">Redinha</option>
                            <option value="Ribeira">Ribeira</option>
                            <option value="Rocas">Rocas</option>
                            <option value="Salinas">Salinas</option>
                            <option value="Santos Reis">Santos Reis</option>
                            <option value="São Gonçalo do Amarante">São Gonçalo do Amarante</option>
                            <option value="Tirol">Tirol</option>
                        </select>
                    </div>

                    <div className="w-full mb-5">
                        <label className="font-semibold mr-3">Dia do ocorrido:</label>
                        <input type="date" className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none"/>
                    </div>

                    <div className="flex items-center gap-3">
                        <input type="checkbox" />
                        <p className="text-xs font-semibold w-full">
                            Ao clicar, você confirma que todas as informações fornecidas são verídicas.
                        </p>
                    </div>
                </div>
                <button className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer rounded-4xl p-2">Registrar Denúncia</button>
            </form>
        </>
    )
}

export default RegistroDenuncia