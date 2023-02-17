import styled from "styled-components";

export const Container = styled.div`
    width: 50px;
    height: 50px;
    margin: ${({margin}) => margin ?? "10px"};
    font-size: 28px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    cursor: pointer;
    transition: .5s;

    &:hover{
        color: #4DC6B6;
        transform: scale(1.1);
    }
`