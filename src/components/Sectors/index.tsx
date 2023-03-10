import { useState } from 'react'
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

    return (
        <SectorStyle
        bgImage={bgImage}>
            <h1>{title}</h1>
            <p>{text}</p>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
                spaceBetween={50}
                slidesPerView={4}
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