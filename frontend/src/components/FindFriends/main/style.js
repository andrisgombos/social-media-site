import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin-top: 75px;
    /* height: 84%; */
    display: flex;
    justify-content: center;
    padding-top: 5%;
    background: #F0F0F0;
    box-shadow: inset 0 7px 9px -9px rgba(0,0,0,0.2);
`;

export const GridContainer = styled.div`
    width: 80%;
    height: auto;
    /* height: 84%; */
    display: grid;
    justify-content: center;
    grid-gap: 5%;
    grid-template-columns: 1fr 1fr 1fr;
    background: #F0F0F0;
`;

