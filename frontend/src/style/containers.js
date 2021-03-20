import styled from 'styled-components';
import BGpicture from '../assets/logos_pictures_etc/images/background_image.png';


export const LandingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

export const RightContainer = styled.div`
    width: 65vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`;

export const LeftContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 35vw;
    height: 100%;    
    background-image: url(${BGpicture}), linear-gradient(150deg, #c468ff, #6e91f6);
    background-repeat: no-repeat; 
    background-size: cover;
`;


export const RightHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    padding: 40px;
    height: 10%;
    width:100%
    button {
        margin-left: 20px;
        margin-right: 7%;
    }
    
    
    
`;

export const FormContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    height: 90%;
    h1 {
        margin-bottom: 40px;
    }
    form {
        div {
            margin-top: 20px;
        }
    }
`;