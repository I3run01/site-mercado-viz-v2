import styled from "styled-components";

const fontColor = 'black'
const redThemeColor = '#E31C1C'


export const MenubarStytle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    position: fixed;
    top: 0;
    z-index: 10;
    right: 0;
    left: 0;

    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    box-sizing: border-box;
    background: linear-gradient(179.21deg, rgba(255, 253, 253, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */

    a {
        position: relative;

        height: 100%;

        text-decoration: none;
        color: ${fontColor};
        font-family: 'Dosis';
        font-size: 18px;
        font-weight: bold;

        display: flex;
        align-items: center;

        ::after {
            content: "";
            position: absolute;
            left: 50%;
            right: 50%;
            bottom: 12px;
            border: 2px solid ${redThemeColor};
            transition: .5s;
            opacity: 0;
        }
        
        :hover {
            cursor: pointer;
            color: ${redThemeColor};

            ::after {
                left: 15%;
                right: 15%;
                opacity: 100%;
            }
        }
    }


`