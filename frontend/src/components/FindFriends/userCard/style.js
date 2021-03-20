import styled from 'styled-components';

export const UserCardContainer = styled.div`
    height: 400px;
    width: 300px;
    border: solid 1px darkgrey;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: white;
    padding: 5px;

    p {
        text-align: center;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5px;
`;

export const GreyButton = styled.button`
    height: 30px; 
    width: 100px;
    font-size: 10px;
    background: none;
    border-color: lightgray;
    border-style: solid;
    border-radius: 20px;
    margin: 10px;
    cursor: pointer;

    :focus {
        outline:none
    }
`;

export const Interests = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
`;

export const GreyButtonSmall = styled.button`
    height: 20px; 
    width: 80px;
    background: #F0F0F0;
    border: none;
    border-radius: 10px;
    margin: 2px;
    cursor: pointer;

    :focus {
        outline:none
    }
`;