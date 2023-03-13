import styled from "styled-components";

const fontColorLight = 'black'

export const MediasBTNstyle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: +10;

    height: max-content;
    width: max-content;

    #mainBTN {
        height: 40px;
        width: 150px;
        border-radius: 20px;
        border: 1px solid ${fontColorLight};

        display: flex;
        justify-content: flex-start;

        box-sizing: border-box;
        background: linear-gradient(179.21deg, rgba(255, 253, 253, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
        box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(40px);
        /* Note: backdrop-filter has minimal browser support */

        :hover {
            cursor: pointer;
            border-color: red;

            .txt {
                color: red;
            }

            .icons {
                filter: grayscale(0%);
            }
        }
    }

    .icons {
        margin: 6px;
        margin-left: 10px;

        filter: grayscale(100%);
    }

    .txt {
        text-decoration: none;
        color: ${fontColorLight};
        font-family: 'Dosis';
        font-size: 12px;
        font-weight: bold;
    }

`