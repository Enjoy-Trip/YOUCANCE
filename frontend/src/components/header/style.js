import styled from "styled-components"
import Wrapper from 'styles/Wrapper'
import IROnly from "styles/IROnly"

export const HeaderWrapper = styled.header`
    width: 100%;
    position: fixed;
    transition: 0.2s;
    color: white;
    z-index: 500;
    box-shadow: ${props => props.moved ? "0 -1px 20px 5px #ccc" : ""};
    border-bottom: ${props => props.moved ? "1px solid #c4c4c4" : ""};
    background-color: ${props => props.moved ? "white" : ""};
    color: ${props => props.moved ? "#333" : ""};
    
    box-shadow: ${props => props.time === "morning" ? "0 -1px 2px 2px #ccc" : props.time === "afternoon" ? "0 -1px 2px 2px #ccc" : props.time === "evening" ? "0 -1px 2px 2px #333" : ""};
    border-bottom: ${props => props.time === "evening" ? "0" : ""};
    color: ${props => props.time === "morning" ? "#333" : props.time === "afternoon" ? "#333" : props.time === "evening" ? "white" : ""};
    background-color: ${props => props.time === "morning" ? "white" : props.time === "afternoon" ? "white" : props.time === "evening" ? "rgb(38, 38, 38)" : ""};
`

export const DivWrapper = styled.div`
    ${Wrapper}

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    font-family: 'Righteous';
`

export const HeaderTitle = styled.h1`
    font-size: 30px;
`

export const HeaderNavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 16px;
`

export const ArticleWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
`
export const FindArticle = styled.article`
    width: 400px;
    padding: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    font-size: 14px;

    & > header {
        ${IROnly}
    }
`

export const StyledArticleForm = styled.form`
    display: flex;
    flex-direction: column;

    & > input {
        margin-bottom: 20px;
    }

    & > button + button  {
        margin-top: 10px;
    }
`