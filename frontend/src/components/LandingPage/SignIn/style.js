import styled from 'styled-components';

export const RightContainer = styled.div`
    width: 65vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    
`;
export const RightHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    
    padding: 40px;
    height: 10%;
    width:100%;
    button {
        margin-right: 20px;
    }
    p{
        margin:20px;
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