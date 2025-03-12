import { Link } from "react-router-dom"

function Home() {
    return(
        <>
            <header className="w-screen h-20 bg-blue-400 text-white flex justify-between items-center p-10">
                <div>
                    <Link to={"/"} className="text-3xl font-semibold">SIG-SEG</Link>
                </div>

                <div className="flex gap-2">
                    <Link to={"/login"}><button className="border rounded-2xl px-5 py-2 hover:bg-white hover:text-blue-400 cursor-pointer">Área do Servidor</button></Link>
                </div>
            </header>            

            <form className="w-md justify-self-center flex flex-col items-center gap-4 shadow-md p-8 rounded-lg mt-5">
                <h2 className="text-2xl font-semibold">Cadastro de denúncia</h2>
                <div>
                    <label className="mr-3">Classificação</label>
                    <select name="classificacao" id="classificacao">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </form>
        </>
    )
}

export default Home