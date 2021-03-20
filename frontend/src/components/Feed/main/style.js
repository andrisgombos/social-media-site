import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100vw;
    height: auto;
    /* height: 84%; */
    display: flex;
    justify-content: center;
    padding-top: 5%;
    background: #F0F0F0;
    background-size:cover;
    margin-top: 150px;
`;

export const GridContainer = styled.div`
    width: 80%;
    height: auto;
    /* height: 84%; */
    display: grid;
    grid-gap: 5%;
    grid-template-columns: 1fr 1fr;
    /* border: solid 1px lightgrey; */
    background: #F0F0F0;

`;

