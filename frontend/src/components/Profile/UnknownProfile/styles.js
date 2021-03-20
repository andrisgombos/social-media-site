import styled from 'styled-components';

    

export const Main = styled.div`
    height: 400px;
    width: 80%;
    background-color:white;
    border: 1px lightgray solid;
    position: sticky;
    margin: -100px;
    opacity:0.9; 
    display:flex;
    flex-direction: row;
    border-radius:5px;

    
`;

export const LeftSection = styled.div`
    width:30%;
    height:100%;
    border-right: 1px lightgray solid;
    display:flex;
    flex-direction: column;
    align-items:center;
    img{
        height:40px;
        width:40px;
        margin-top:40px;
        margin-bottom:20px;
    }
    h2{
        margin:10px;
    }
    p{
        margin: 10px;

    }
    button{
        height:40px;
        width:125px;
        border-radius:20px;
        border: 1px lightgray solid;
        background:transparent;
        margin:20px;
    }
`;

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height:100%;
    margin:0;
`;

export const RightTop = styled.div`
    border-bottom: 1px lightgray solid;

    width:100%;
    height:70%;
    display:flex;
    flex-direction: row;
    margin:0;
`;

export const RightBottom = styled.div`
    width:100%;
    height:30%;
`;

export const AboutMe = styled.div`   
    height:100%;
    width:60%;
    margin:0;
    display:flex;
    flex-direction: column;
`;
export const Text = styled.div`
    height:60%;
    width:100%;
    margin:0;
`;
export const ContactInfo = styled.div`
    height:40%;
    width:100%;
    margin:0;
    display:flex;
    align-items:center;
    div{
        width:50%
    };    
`;

export const Interests = styled.div`
    width:40%;
    margin:0;
`;

