import styled from "styled-components";

const fontColor = 'black'

export const CapeStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    height: 100vh;
    position: relative;
    overflow: hidden;

    #productsIMG {
        position: absolute;
        z-index: +1;
        bottom: -100px;
        width: 100%;
        scale: 110%;
    }

    #storeSymbol {
        position: absolute;
        z-index: +1;
        top: 95px;
        width: 250px;
        left: 20px;
    }
    
    #title {
        position: absolute;
        z-index: +1;
        top: 160px;
        left: 320px;
        font-size: 36px;
        font-family: 'Dosis';
        color: ${fontColor};
    }

    #paragraph {
        position: absolute;
        z-index: +1;
        top: 300px;
        left: 50px;
        width: 500px;
        font-size: 18px;
        font-family: 'opens sans';
        font-weight: bold;
        color: ${fontColor};
    }

    #elipseBK {
        z-index: 0;
        position: absolute;
        top: 0;
        opacity: .6;
    }
    
`