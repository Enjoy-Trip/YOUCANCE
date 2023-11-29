import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import IROnly from "styles/IROnly";

const buttonDownAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-25px) translateX(-50%);
    }
    30% {
        opacity: 1;
        transform: translateY(0px) translateX(-50%);
    }
    85% {
        opacity: 1;
        transform: translateY(0px) translateX(-50%);
    }
    100% {
        opacity: 0;
        transform: translateY(25px) translateX(-50%);
    }
`

export const IROnlySpan = styled.span`
    ${IROnly}
`

export const StyledSection1Header = styled.header`
    position: absolute;
    top: 25vh;
    left: 10vw;
    color: white;

    & span {
        display: block;
    }

    & > h2 > span + span {
        margin-top: 18px;
    }

    & > h2 > span:nth-child(1) {
        font-size: 28px;
        padding-left: 8px;
    }
    
    & > h2 > span:nth-child(2) {
        font-size: 64px;
        font-family: 'Jua';
    }

    & > p {
        margin-top: 30px;
        padding-left: 100px;
    }
`

export const StyledSection1Video = styled.video`
    width: 100%;
    height: 102vh;
    object-fit: cover;
`

export const StyledSection1Button = styled.button`
    position: absolute;
    bottom: 55px;
    left: 50%;
    transform: translate(-50%);
    color: white;
    font-size: 18px;
    animation: ${buttonDownAnimation} 1.7s 1s infinite linear;

    & > span {
        ${IROnly}
    }
`

export const StyledSectionHeader = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const StyledSectionTitle = styled.h2`
    font-size: 32px;
    font-family: 'Jua';

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    & > span {
        display: block;
        padding: 2px;
    }
`

export const StyledSectionHeaderParagraph = styled.p`
    display: block;
    margin: 0 auto;
    max-width: 600px;
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
`

export const StyledSection2 = styled.section`
    height: 900px;
    padding-top: 45px;
    padding-bottom: 350px;
    position: relative;
    margin-top: 40px;
    background: url(${props => props.img});
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: cover;
`

export const StyledSection2List = styled.ul`
    position: absolute;
    left: calc(50vw - 160px);
    right: 0;
    top: 360px;
    height: 450px;
    display: flex;
    gap: 30px;
    transition: all 0.3s;
    margin-left: ${props => props.margin};
`

export const Section2ListArticle = styled.article`
    width: 320px;
    height: 450px;
    border-radius: 10px;
    overflow: hidden;

    background: url(${props => props.backgroundimg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 50%;
    background-position-y: 50%;

    display: flex;
    flex-direction: column;
    padding: 20px;
    transition: all 0.1s;


    &:hover {
        box-shadow: inset 0 -220px 200px 5px rgba(0,0,0,1);
    }

    &:hover > header {
        display: block;
    }

    &:hover > p {
        display: block;
    }

    & > header {
        color: white;
        display: none;
        width: 250px;
        font-size: 18px;
        margin-top: auto;
        margin-bottom: 20px;
    }

    & > header > h3 {
        font-weight: 700;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    & > p {
        color: white;
        display: none;
        width: 250px;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 10px;
    }
`

export const CarouselButton = styled.button`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 28px;
    color: #777;
    background-color: rgba(233, 233, 233, 0.7);

    & > span {
        ${IROnly}
    }
`

export const Section2LeftButton = styled(CarouselButton)`
    bottom: 300px;
    left: 150px;
    display: ${props => props.show};
`

export const Section2RightButton = styled(CarouselButton)`
    bottom: 300px;
    right: 150px;
    display: ${props => props.show};
`

export const StyledSection3 = styled.section`
    padding-top: 110px;
    height: 800px;
    position: relative;
    background: url(https://cdn.theyachtweek.com/assets/destinations/caribbean/deco4.svg) top left no-repeat;
    /* background-position-x: 50%; */
    background-position-y: 50%;
`

export const StyledSection3List = styled.ul`
    position: absolute;
    left: calc(50vw - 175px);
    right: 0;
    top: 200px;
    height: 450px;
    display: flex;
    gap: 30px;
    transition: all 0.3s;
    margin-left: ${props => props.margin};
`

export const Section3ListArticle = styled.article`
    width: 350px;
    height: 450px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
`

export const Section3ArticleHeader = styled.header`
    position: absolute;
    color: white;
    font-weight: 700;
    letter-spacing: 2px;
    bottom: 30px;
    left: 30px;
    transform: translateY(80px);
    transition: all 0.2s;

    & > span {
        font-size: 12px;
    }

    & > h3 {
        font-size: 20px;
        margin-top: 10px;
    }

    & > button {
        background-color: #0284FE;
        color: white;
        font-size: 16px;
        padding: 10px 15px;
        border-radius: 10px;
        margin-top: 50px;
    }
`

export const Section3Video = styled.video`
    width: 100%;
    height: 450px;
    object-fit: cover;
`

export const Section3LeftButton = styled(CarouselButton)`
    bottom: 350px;
    left: 150px;
    display: ${props => props.show};
`

export const Section3RightButton = styled(CarouselButton)`
    bottom: 350px;
    right: 150px;
    display: ${props => props.show};
`

export const Section3MoreButton = styled(Link)`
    background-color: #0284FE;
    color: white;
    font-size: 16px;
    padding: 15px 20px;
    border-radius: 6px;
    position: absolute;
    bottom: 55px;
    left: 50%;
    transform: translateX(-50%);
    font-family: Righteous;
`

export const StyledSection4 = styled.section`
    padding-top: 60px;
    padding-bottom: 60px;
    position: relative;
    z-index: 0;
`

export const IframeWrapper = styled.div`
    width: 100%;
    overflow: hidden;

    & > iframe {
        margin-top: -530px;
        width: 100%;
        height: 1100px;
    }
`