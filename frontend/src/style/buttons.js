import styled from 'styled-components';


export const PurpleButton = styled.button`
    background-image: linear-gradient(115deg, #c568ff 0%, #6e91f6);
    height: 60px;
    width: 250px;
    border-radius: 30px;
    border: none;
    color: white;
    cursor: pointer;    
    :focus {
        outline:none;
    }
`;

export const GreyButton = styled.button`
    height: 40px; 
    width: 120px;
    background: none;
    border-color: lightgray;
    border-style: solid;
    border-radius: 20px;
    cursor: pointer;

    :focus {
        outline:none
    }
`;