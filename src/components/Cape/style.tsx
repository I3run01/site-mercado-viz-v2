import styled from "styled-components";

const fontColor = 'black'

export const CapeStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    min-height: 100vh;
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding-top: 80px;

    #logo {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;

        #storeSymbol {
            z-index: +1;
            width: 250px;
            scale: 90%;
        }
        
        #title {
            z-index: +1;
            font-size: 36px;
            font-family: 'Dosis';
            color: ${fontColor};
            margin-left: 40px;
        }
    }
    
    #paragraph {
        z-index: +1;
        width: 500px;
        font-size: 16px;
        font-family: 'Dosis';
        font-weight: bold;
        color: ${fontColor};

        padding-left: 40px;
    }

    #productsIMG {
        z-index: +1;
        width: 100%;
        scale: 110%;
    }

    #elipseBK {
        position: absolute;
        z-index: 0;
        top: 0;
        opacity: .6;
    }
    
    `