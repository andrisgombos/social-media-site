import styled from 'styled-components'

export const Main = styled.div`
    height: 600px;
    width: 80%;
    background-color:white;
    border: 1px lightgray solid;
    position: sticky;
    margin: -100px;
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
    button{
        height:40px;
        width:125px;
        border-radius:20px;
        border: 1px lightgray solid;
        background-color:transparent; 
        margin:40px;
    }
`;

export  const BottomButtons= styled.div`
    display:flex;
    flex-direction:column;

`;

export const RightSection = styled.div`
    /* border: 1px red solid; */

    width: 70%;
    height:100%;
    display:flex;
    flex-direction:column;
    
    form{
        display:flex;
        flex-direction:column;
        height:100%;
        width:100%;
        section{
            display:flex;
            height:100%
        }        
    }
`;   

export const Personal =styled.div`
    margin:5px;
    display:flex;
    flex-direction:column;    
    width:50%;
    height:100%;    
`;

export const InputContainer = styled.div`
    border-bottom: solid 2px lightgray;
    height: 50px;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin:20px;
`;




export const Intrests = styled.div`
height:20%;
margin-top:5%;
margin-bottom:20px;
h3{
    margin:20px;
}
`;

