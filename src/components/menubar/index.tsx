import { MenubarStytle } from './style'
import { Link } from 'react-scroll'

export const Menubar = () => {

    return (
        <MenubarStytle>
                <Link to="inicio" spy={true} smooth={true} offset={-20} duration={500}>Início</Link>
                <a>Panificadora</a>
                <Link to="Açougue" spy={true} smooth={true} offset={-20} duration={500}>Açougue</Link>
                <Link to="Mercado" spy={true} smooth={true} offset={-20} duration={500}>Mercado</Link>
                <a>Hortifruti</a>
        </MenubarStytle>
    )
}