import { SectorStyle } from './styled'

type Props = {
    title: string
    text: string
    bgImage: string
    gallary : string[]
}

export const Sectors = ({title, text, bgImage, gallary}:Props) => {

    return (
        <SectorStyle
        bgImage={bgImage}>
            <h1>{title}</h1>
            <p>{text}</p>
            <div id='gellary'>
                {
                    
                }
            </div>
        </SectorStyle>
    )
}