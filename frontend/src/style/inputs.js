import styled from 'styled-components';

export const InputContainer = styled.div`
    border-bottom: solid 2px lightgray;
    height: 50px;
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MotionInput = styled.input`
    border: none;
    width: 300px;
    font-size: 16px;
    height: 22px;
    cursor: pointer;
    :focus {
        outline:none
    }
`;