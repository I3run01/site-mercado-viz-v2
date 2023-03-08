import styled from "styled-components";

type Props = {
    bgImage:string
    position: number
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
        height: 420px;
        margin-left: 50px;
        overflow: hidden;
  
        #imagesContainer {
            position: absolute;
            left: ${props => props.position}%;
            
            display: flex;
            justify-content: space-around;   
            
            width: max-content;
            height: max-content;
            margin: 10px;
            
            transition: all 0.5s ease-in-out;
            
            .images {
                width: 250px;
                height: auto;
                
                margin-right: 10px;
                margin-left: 10px;
                
                img {
                    height: 400px;
                    border: 3px solid ${fontColor};

                    box-shadow: 3px 3px 20px black;
                }
            }
        }

        #leftBtn, #rightBtn {
            position: absolute;
            top: 50%;

            filter: grayscale(100%);
            transition: all .5s ease-in-out;
    
            :hover {
                cursor: pointer;
                filter: grayscale(0%);
            }

            :active {
                transform: scale(60%);
            }

        }
    
        #leftBtn {
            left: 0;
        }
    
        #rightBtn {
            right: 0;
        }
        
    }
`