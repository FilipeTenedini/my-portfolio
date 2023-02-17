import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color:red; */
    position: fixed;
    top: 0;

`;

export const Name = styled.h1`
    color: #FFFFFF;
    font-size: 32px;
    margin-left: 140px;
    z-index: 1;    
    
    &:hover .bar{
        color: red;
        transform: translateX(115px);
        z-index: 1;
    }

    span{
        color: #4DC6B6;
    }

`;

export const Bar = styled.div`
    height: 2px;
    width: 75px;
    background-color: #4DC6B6;
    transition: all ease-in .5s;
    margin-top: 3px;
    z-index: 0;
`;
export const MenuSymbol = styled.div`
    margin-right: 30px;
    font-size: 38px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`;