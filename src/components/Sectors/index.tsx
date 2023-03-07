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
            <div id='gallery'>
                {
                    gallary.map((item, index) => {
                        return (
                            <div className='images'>
                                <img src={item} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div id='leftBtn'></div>
            <div id='rightBtn'></div>
        </SectorStyle>
    )
}