import styled from "styled-components";

type Props = {
    bgImage:string
}

const fontColor = 'black'

export const SectorStyle = styled.div<Props>`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    padding-top: 60px;
    padding-bottom: 60px;

    h1 {
        font-size: 36px;
        font-family: 'Dosis';
        color: ${fontColor};
        font-weight: bold;

        margin-left: 50px;
        margin-top: 50px;
    }

    p {
        font-size: 18px;
        font-family: 'Dosis';
        color: ${fontColor};

        margin-left: 50px;
        margin-top: 20px;
        max-width: 400px;
    }  
    
    #imagesContainer {
        position: relative;
        margin: 50px;

        .swiper-button-prev, .swiper-button-next {
            position: absolute;
            color: black;
            background-color: white;

            padding: 10px;
            border: 1px solid black;
            border-radius: 50%;
            width: 40px;
            height: 40px;

            scale: 80%;
        }

        .swiper-button-prev {
            left: 0;
        }
        .swiper-button-next {
            right: 0;
        }
        

        .images {
            width: 25%;

            display: flex;
            justify-content: center;

            img {
                border: 2px solid black;
                width: 270px;

                -webkit-box-shadow: 2px 5px 24px -6px #000000; 
                box-shadow: 2px 5px 24px -6px #000000;

                filter: saturate(50%);

                :hover {
                    cursor: pointer;
                    filter: saturate(100%);
                }
            }
        }

    }

`