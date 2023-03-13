import {MediasBTNstyle} from './style'

export const Medias_btn = () => {

    return (
        <MediasBTNstyle>
            <div id='mainBTN'>
                <img src="Medias_btn/phoneIcon.svg" alt="" className='icons' />
                <div className='txt'> Contato <br />Redes sociais</div>
            </div>
            <div className='mediasBTN'>
                <img src="Medias_btn/phoneIcon.svg" alt="" className='icons' />
                <div className='txt'> Telefone fixo <br />(41)3030-6675</div>
            </div>
            <div className='mediasBTN'>
                <img src="Medias_btn/phoneIcon.svg" alt="" className='icons' />
                <div className='txt'> WhatsApp <br />(41)99877-0153</div>
            </div>
        </MediasBTNstyle>
    )
}