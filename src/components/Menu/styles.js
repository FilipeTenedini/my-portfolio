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
    width: 480px;
    height: 100%;
    background-color: #161616;
    position: fixed;
    transform: translateX(${({appear}) => appear ? "-480px": "480px"});

    right: -480px;
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
    font-size: 42px;
    align-items: center;
    position: absolute;
    left: 30px;
    top: 30px;
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
    height: 82%;
`;
export const ListItem = styled.li`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
    color: #FFF;
        &:first-child{
            margin-top: 60px;
        }

`
export const Text = styled.p`
    font-size: 28px;
    width: 300px;
    text-transform: uppercase;
    padding-left: 80px;
    transition: .5s;
    cursor: pointer;        
    
        &:hover{
            color: #4DC6B6;
            transform: scale(1.1);
        }


`;
export const NetWork = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const InfoItem = styled.div`
    width: 100%;
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`

export const ColorArea = styled.span`
    color: #4DC6B6 ;
    margin-left: 5px;
`