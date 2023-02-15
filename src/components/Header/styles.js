import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */

`;
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Name = styled.h1`
    color: #FFFFFF;
    font-size: 32px;
    margin-left: 140px;
    z-index: 1;    
    
    &:hover .bar{
        color: red;
        transform: translateX(75px);
        z-index: 1;
    }
`;
const Bar = styled.div`
    height: 2px;
    width: 120px;
    background-color: #4DC6B6;
    transition: all ease-in .5s;
    margin-top: 3px;
    z-index: 0;
`;
const MenuSymbol = styled.div`
    margin-right: 30px;
    font-size: 38px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`;

export { Header, Container, Name, Bar, MenuSymbol }