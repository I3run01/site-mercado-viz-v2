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
        top: 60px;
        width: 250px;
        left: 20px;
    }
    
    #title {
        position: absolute;
        z-index: +1;
        top: 120px;
        left: 340px;
        font-size: 36px;
        font-family: 'Dosis';
        color: ${fontColor};
    }

    #paragraph {
        position: absolute;
        z-index: +1;
        top: 280px;
        left: 50px;
        width: 500px;
        font-size: 16px;
        font-family: 'Dosis';
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