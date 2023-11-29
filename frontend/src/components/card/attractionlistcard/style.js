import styled from "styled-components";
import IROnly from "styles/IROnly";

export const AttractionArticle = styled.article`
    padding: 0 25px 30px;
    position: relative;

    & > p:nth-child(1) {
        ${IROnly}
    }
`

export const AttractionArticleImageWrapper = styled.div`
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 5px;
`

export const AttractionArticleImage = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`

export const AttractionArticleHeader = styled.header`
    display: flex;
    gap: 10px;
    margin: 16px 0 7px;
    justify-content: space-between;
`

export const AttractionTitle = styled.h3`
    font-size: 18px;
    font-weight: 700;
`

export const AttractionParagraph = styled.p`
    font-size: 12px;
    color: #777;
`

export const AttractionLike = styled.button`
    & > i:nth-child(3) {
        color: rgba(220, 20, 60, 0.8);
        display: none;
    }

    & > span {
        ${IROnly}
    }
`