import styled from 'styled-components';


export const NewPostContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: solid 1px lightgrey;
    border-radius: 5px;
    background: white;

    input {
        border: none;
        width: 50%;
        font-size: 15px
    }
`;

export const NewPostSend = styled.button`
    background-image: linear-gradient(115deg, #c568ff 0%, #6e91f6);
    border: none;
    height: 50px;
    width: 50px;
    border-radius: 50px;
`;