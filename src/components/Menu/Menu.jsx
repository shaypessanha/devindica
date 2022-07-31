import { Link } from 'react-router-dom'
import './menu.css'

function Menu() {
    return(
        <ul className="menu">
            <li className="item">
                <Link className="link" to="/Home">Home</Link>
            </li>
            <li className="item">
                <Link className="link" to="/Indicar">Quero Indicar</Link>
            </li>
            <li className="item">
                <Link className="link" to="/Meindica">Me Indica</Link>
            </li>
            {/* <li className="item">
                <Link className="link" to="/Sobre">Sobre</Link>
            </li> */}
            <span className='logo'>{'<'}dev.indica{'>'}</span>
        </ul>
    )
}

export default Menu