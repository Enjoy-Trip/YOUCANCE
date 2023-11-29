import styled from "styled-components";
import IROnly from "styles/IROnly";

export const StyledMain = styled.main`
    padding-top: 70px;
    background-color: ${props => props.time === "morning" ? "white" : props.time === "afternoon" ? "white" : "rgb(49, 49, 53)"};
`

export const StyledSection = styled.section`
    background-color: white;
    width: 100%;
    display: flex;

    background-color: ${props => props.time === "morning" ? "white" : props.time === "afternoon" ? "white" : "rgb(38, 38, 38);"};
`

export const StyledSectionHeader = styled.header`
    ${IROnly}
`

export const StyledImage = styled.img`
    width: 50vw;
    height: 890px;
    object-fit: cover;
`

export const StyledArticleWrapper = styled.div`
    width: 50vw;
    padding-top: 8vh;

    color: ${props => props.time === "morning" ? "#333" : props.time === "afternoon" ? "#333" : "white"};
`

export const StyledArticle = styled.article`
    width: 512px;
    padding: 20px;
    margin: auto;
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

    & > fieldset {
        position: relative;
    }

    & legend {
        ${IROnly}
    }
`

export const StyledValidityParagraph = styled.p`
    position: absolute;
    font-size: 12px;
    bottom: 13px;
    left: 3px;

    display: ${props => props.validity === "init" ? "none" : "block"};
    color: ${props => props.validity === "SUCCESS" ? "#0284FE" : "rgba(220, 20, 60, 0.8)"};
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
`