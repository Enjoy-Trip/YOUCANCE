import styled from "styled-components";
import IROnly from "styles/IROnly";

export const StyledListItem = styled.li`
    width: 100%;

    & > a > p {
        display: none;
    }
`

export const StyledArticle = styled.article`
    width: 100%;
    height: 300px;
    border-radius: 3px;
    overflow: hidden;
    position: relative;

    & > header {
        ${IROnly}
    }

    & > img {
        width: 100%;
        /* height: 300px; */
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }

    &:hover:after {
        content: "${props => props.title ? props.title : "" }";
        display: block;
        padding: 80px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: white;
        line-height: 140px;
        text-align: center;
    }
`