import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div>
            <h1>Seja bem-vindo!</h1>
            <Link to="/busca">Buscar CEP</Link>
    
        </div>
    )
}