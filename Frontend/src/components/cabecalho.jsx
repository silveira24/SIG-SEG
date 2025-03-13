import { Link } from "react-router-dom"

function Cabecalho({titulo}) {
    return (
        <header className="w-screen bg-blue-400 text-3xl text-white h-20 flex justify-center items-center">
            <div className="absolute left-10"> 
                <Link to={"/"} className="text-3xl font-semibold">SIG-SEG</Link>
            </div>
            <h1 className="font-bold">{titulo}</h1>
        </header>
    )
}

export default Cabecalho