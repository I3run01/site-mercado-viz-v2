import { MenubarStytle } from './style'
import { Link } from 'react-scroll'

export const Menubar = () => {

    return (
        <MenubarStytle>
                <Link to="inicio" spy={true} smooth={true} offset={-20} duration={500}>Início</Link>
                <a>Panificadora</a>
                <Link to="Açougue" spy={true} smooth={true} offset={-20} duration={500}>Açougue</Link>
                <a>Mercado</a>
                <a>Início</a>
                <a>Hortifruti</a>
        </MenubarStytle>
    )
}