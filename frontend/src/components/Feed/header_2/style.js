import styled from 'styled-components';


export const Header2Container = styled.div`
    width: 100vw;
    height: 75px;
    display: flex;
    background: #F0F0F0;
    border-bottom: solid 1px lightgrey;
    padding-right: 10%;
    padding-left: 10%;
    box-shadow: inset 0 7px 9px -9px rgba(0,0,0,0.2);

`;

export const Header2Left = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* border: solid 1px red; */

    img {
        padding-right: 5%;
    }

    input {
        background: none;
        border: none;
        font-size: 15px;
    }
`;

export const Header2Right = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* border: solid 1px red; */
    color: grey;
        
    img {
        padding-left: 5%;
    }

    p {
        padding-left: 5%;
    }
`;