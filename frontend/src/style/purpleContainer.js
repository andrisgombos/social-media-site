import styled from 'styled-components';



export const Top = styled.div`
    height: 60%;
    width:100%;
    color: white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    img{
        margin-top:100px
    }
    h1{
        margin:20px;
    }
    p{
        opacity:0.7;
        margin-top:20px;
        text-align:center;
    }
`;

export const Middle = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    button{
        background: transparent;
        height: 35px;
        width:130px;
        border-radius: 25px;
        border:solid 2px white;
        cursor: pointer;
        opacity: 0.7;
        margin-left: 10px;
        margin-right: 10px;     
        }
        button:focus{
            outline:none;
        }

`;
export const SocialMedia = styled.div`
align-items: center;
justify-content: center;
    display:flex;
    img{
        margin-top :100px;
        margin-left:5px;
        margin-right:5px;
        height: 32px;        
        opacity:0.6;
        cursor: pointer;
    }

`;
export const Copyright = styled.div`
    p{
        color: white;
        text-align:center;
        margin: 50px;
        font-size: 10px;
    }

`;

