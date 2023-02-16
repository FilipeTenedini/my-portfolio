import styled, { keyframes } from 'styled-components';

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    background-color: ${({appear}) => appear ? "rgba(0,0,0, 0.7)": "transparent"}; 
    z-index: 2;
    transition: all ease-in .5s;
`;
export const Container = styled.div`
    width: 550px;
    height: 100%;
    background-color: #161616;
    position: fixed;
    transform: translateX(${({appear}) => appear ? "-550px": "550px"});

    right: -550px;
    top: 0;
    z-index: 3;
    transition: all ease-in .5s;
`;
const rotateCenter = keyframes`
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
`
const exRotate = keyframes`
  0% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
`
export const CloseMenu = styled.div`
    display: flex;
    color: white;
    display: inline-flex;
    font-size: 50px;
    align-items: center;
    position: absolute;
    left: 20px;
    top: 20px;
    cursor: pointer;
    
      &:hover{
          -webkit-animation: ${rotateCenter} 0.6s ease-in-out both;
            animation: ${rotateCenter} 0.6s ease-in-out both;
      }
      &:not(hover){
          -webkit-animation: ${exRotate} 0.6s ease-in-out both;
        animation: ${exRotate} 0.6s ease-in-out both;
      }
`

export const Items = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 5s;
    height: 95%;
`;