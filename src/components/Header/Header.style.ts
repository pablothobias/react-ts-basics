import styled from "styled-components";

export const HeaderContainerCss = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: space-between;
    width: 76vw;
    height: 8vh;
    padding: 0 2vw;
    background-color: #515050;
    border-radius: 10px 10px 0 0;
`;

export const ImageHeaderCss = styled.img`
    width: 5vw;
    height: 5vh;
`;

export const TitleHeaderCss = styled.h1`
    text-align: center;
    font-size: 1.8rem;
    color: #ffffff;
`;