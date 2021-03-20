import styled from 'styled-components';


export const Header1Container = styled.div`
    width: 100vw;
    height: 75px;
    display: flex;
    padding-right: 5%;
    padding-left: 5%;
    background-color: white;
    position: fixed;
`;


// left side
export const Header1Left = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        padding-right: 2%;
    }

    p {
        padding-right: 5%;
    }
`;

export const HeaderLeftA = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        padding-right: 10px;
    }

    p {
        padding-right: 60px;
        font-size: 18px;
    }
`;

export const HeaderLeftB = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    img {
        margin-left: 20px;
        padding-right:10px;
    }

    p {
        padding-left: 10px;
        margin-right: 20px;
        font-size: 14px;
    }
`;

export const HeaderLeftC = styled.div`
    height: 100%;
    width: 170px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: solid 2px purple;
    cursor: pointer;

    img {
        margin-left: 20px;
        padding-right:10px;
    }

    p {
        padding-left: 10px;
        font-size: 14px;
    }
`;


// right side
export const Header1Right = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    img {
        padding-left: 5%;
    }

    p {
        padding-left: 5%;
    }
`;

export const HeaderRightA = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    img {
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export const HeaderRightB = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    img {
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export const HeaderRightC = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    img {
        padding-left: 15px;
        padding-right: 15px;
    }
`;

