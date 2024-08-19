import '../../styles/_header.sass'
import { Link } from 'react-router-dom'
import Button from '../Button';


function Header() {
    return (
        <header className='header'>
            <h1>Local Express</h1>
            <h2>Vos courses Livrées avec le sourire</h2>
            <button>Commencer</button>
            <Link to="/Produits"><Button text={'Commencer'} /></Link>
        </header>
    )
}
    

export default Header;