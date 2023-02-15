import styled from 'styled-components';

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    /* background-color: rgba(0,0,0, 0.7); */
    z-index: 2;
    transition: 5s;
`;

export const Container = styled.div`
    width: 450px;
    height: 100%;
    background-color: #161616;
    position: fixed;
    transform: translateX(${props => props.appear ? '0': '-450px'});
    top: 0;
    z-index: 3;
    transition: 2s;
`;

export const Items = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 5s;
`;