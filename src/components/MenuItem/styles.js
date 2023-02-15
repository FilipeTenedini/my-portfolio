import styled from 'styled-components';

export const ListItem = styled.li`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
    cursor: pointer;
    color: #FFF;
    transition: .5s;
    &:first-child{
        margin-top: 80px;
    }
    &:hover{
        color: #4DC6B6;
    }
`

export const Text = styled.p`
    font-size: 32px;
    width: 300px;
    text-transform: uppercase;
    padding-left: 80px;


    &:hover{

        transform: scale(1.1);
    }
`