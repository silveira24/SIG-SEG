import { Link } from "react-router-dom"

function Home() {
    return(
        <>
            <header className="w-screen h-20 bg-blue-400 text-white flex justify-between items-center p-10 fixed top-0">
                <div>
                    <Link to={"/"} className="text-3xl font-semibold">SIG-SEG</Link>
                </div>

                <div className="flex gap-2">
                    <Link to={"/login"}><button className="border rounded-2xl px-5 py-2 hover:bg-white hover:text-blue-400 cursor-pointer">Área do Servidor</button></Link>
                </div>
            </header>            
        </>
    )
}

export default Home