import styled from "styled-components";

const fontColor = 'black'

export const CapeStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    height: 100vh;
    position: relative;
    overflow-x: hidden;

    #productsIMG {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    #storeSymbol {
        position: absolute;
        top: 95px;
        width: 250px;
        left: 20px;
    }
    
    #title {
        position: absolute;
        top: 95px;
        left: 50px;
        font-size: 4px;
        font-family: 'Dosis';
        color: ${fontColor};
    }
    
`