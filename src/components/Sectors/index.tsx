import { useEffect, useState } from 'react'
import { SectorStyle } from './styled'
import { Navigation, Pagination, Scrollbar, A11y, Zoom} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


type Props = {
    title: string
    text: string
    bgImage: string
    gallary : string[]
}

export const Sectors = ({title, text, bgImage, gallary}:Props) => {

    const [slidesPerView, setSlidesPerView] = useState<number>(4)

    useEffect(() => {
        if(window.innerWidth < 400) setSlidesPerView(1)
        else if(window.innerWidth >= 400 && window.innerWidth < 600) setSlidesPerView(2)  
        else if(window.innerWidth >= 600 && window.innerWidth < 800) setSlidesPerView(3)
        else setSlidesPerView(4)
    })

    return (
        <SectorStyle
        bgImage={bgImage}>
            <h1>{title}</h1>
            <p>{text}</p>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                navigation
                pagination={{ clickable: true }}
                //scrollbar={{ draggable: false }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                

                id='imagesContainer'
            >
                {gallary.map((item, index) => {
                    return (
                        <SwiperSlide className='images'>
                            <img src={item} alt="" />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </SectorStyle>
    )
}