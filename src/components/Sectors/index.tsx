import { useState } from 'react'
import { SectorStyle } from './styled'

type Props = {
    title: string
    text: string
    bgImage: string
    gallary : string[]
}

export const Sectors = ({title, text, bgImage, gallary}:Props) => {

    const [imagesPosition, setImagesPosition] = useState<number>(0)

    const leftButton = () => {
        if(imagesPosition >= 0) setImagesPosition(0)
        else setImagesPosition(imagesPosition + 12)

    }

    const rightButton = () => {
        if(imagesPosition <= -30) setImagesPosition(-30)
        else setImagesPosition(imagesPosition - 12)

    }

    return (
        <SectorStyle
        bgImage={bgImage}
        position={imagesPosition}>
            <h1>{title}</h1>
            <p>{text}</p>
            <div id='gallery'>
                <div id='imagesContainer'>
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
                <div id='leftBtn' onClick={leftButton}>
                    <img src="Button Icons/left.svg" alt="" />
                </div>
                <div id='rightBtn' onClick={rightButton}>
                    <img src="Button Icons/right.svg" alt="" />
                </div>
            </div>
        </SectorStyle>
    )
}