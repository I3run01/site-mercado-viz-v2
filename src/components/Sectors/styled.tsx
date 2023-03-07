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

    #gallery {
        position: relative;

        width: 92%;
        height: 400px;
        margin-left: 50px;
        overflow: hidden;

        #imagesContainer {
            position: absolute;
            left: -80px;

            display: flex;
            justify-content: space-around;   

            width: max-content;
            height: max-content;

            .images {
                width: 300px;
                height: 100%;
            }
        }

    }
`