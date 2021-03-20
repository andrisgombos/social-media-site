import styled from 'styled-components';

export const PostCardContainer = styled.div`
    width: 100%;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    border: solid 1px lightgrey;
`;

export const PostCardHeader = styled.div`
    display: flex;
    font-size: 14px;

    img {
        padding-right: 5%;
    }
`;

export const PostCardFooter = styled.div`
    display: flex;
    justify-content: space-between;

    img {
        padding-right: 25%;
    }

    p {
        font-size: 13px;
    }
`;

export const Like = styled.div`
    display: flex;

    button {
        border: none;
        background-color: white;
        :focus{outline:none}
    }
`;

export const Share = styled.div`
    display: flex;
`;

export const PostContent = styled.div`
    padding-top: 5%;
    padding-bottom: 5%;
`;