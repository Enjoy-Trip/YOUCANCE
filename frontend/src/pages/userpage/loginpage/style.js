import styled from "styled-components";
import IROnly from "styles/IROnly";

export const StyledMain = styled.main`
    padding-top: 70px;
    background-color: ${props => props.time === "morning" ? "white" : props.time === "afternoon" ? "white" : "rgb(49, 49, 53)"};
`

export const StyledSection = styled.section`
    background-color: white;
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;

    background-color: ${props => props.time === "morning" ? "white" : props.time === "afternoon" ? "white" : "rgb(38, 38, 38);"};
`

export const StyledSectionHeader = styled.header`
    ${IROnly}
`

export const StyledImage = styled.img`
    width: 50vw;
    object-fit: cover;
`

export const StyledArticleWrapper = styled.div`
    width: 50vw;
    color: ${props => props.time === "morning" ? "#333" : props.time === "afternoon" ? "#333" : "white"};
`

export const StyledArticle = styled.article`
    width: 512px;
    padding: 20px;
    margin: auto;
    position: relative;
    top: 12vh;
`

export const StyledArticleTitle = styled.h3`
    font-family: 'Luckiest Guy', cursive;
    font-size: 32px;
    letter-spacing: 2px;

    & > span {
        display: block;
        padding: 5px;
    }
`

export const StyledForm = styled.form`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
`

export const StyledArticleParagraph = styled.p`
    display: inline-block;
    font-size: 13px;
    color: #777;
    margin-top: 15px;
`

export const StyledArticleAnchor = styled.a`
    display: inline-block;
    font-size: 13px;
    color: #0284FE;
    margin-left: 5px;
    margin-right: 5px;
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
`