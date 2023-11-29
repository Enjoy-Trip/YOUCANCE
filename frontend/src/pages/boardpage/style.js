import styled from "styled-components";
import IROnly from "styles/IROnly";

export const PageWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`

export const PageHeader = styled.header`
    width: 70px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ddd;
`

export const PageTitle = styled.h1`
    height: 70px;
    padding: 5px;
    border-bottom: 1px solid #ddd;

    & > span {
        ${IROnly}
    }
`

export const PageLogo = styled.p`
    font-family: 'Righteous';
    line-height: 60px;
    color: #0284FE;
    font-size: 50px;
    text-align: center;
`

export const NavButton = styled.button`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.1s;
    color: #777;

    & > i {
        font-size: 20px;
    }

    & > span {
        margin-top: 8px;
        font-size: 12px;
    }

    &:hover {
        color: #0284FE;
    }
`

export const StyledMain = styled.main`
    width: 100%;
`

export const StyledSection = styled.section`
    width: 100%;

    & > header {
        ${IROnly}
    }
`

export const StyledBoardList = styled.ul`
    width: 100%;
    height: 100vh;
    padding: 20px;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    gap: 6px;

    &::-webkit-scrollbar {
        width: 4px;
        background-color: #eee;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #bbb;
        border-radius: 10px;
        background-clip: padding-box;
    }

    &::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }
`