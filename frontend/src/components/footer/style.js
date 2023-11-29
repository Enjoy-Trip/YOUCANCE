import styled from "styled-components";
import IROnly from "styles/IROnly";

export const Footer = styled.footer`
    background-color: #0284FE;
    width: 100%;
    height: 60px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-family: Righteous;

    & > h2 {
        ${IROnly}
    }

    & > ul {
        display: flex;
    }
`

export const ListItem = styled.li`
    display: flex;
    gap: 10px;
`