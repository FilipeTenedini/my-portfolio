import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', sans-serif;
    	background-color: #0f0f0f;	
    }
`

export const Container = styled.div``

export const SocialArea = styled.div`
    height: calc(100vh - 100px);
    width: 145px;
    top: 100px;
    position: fixed;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* background-color: green; */
`
export const Line = styled.div`
    height: 70%;
    width: 1px;
    background-color: white;
    margin-right: 24px;
`
export const Social = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
`