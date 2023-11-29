import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${props => props.color === "blue" ? "#0284FE" : props.color === "red" ? "rgba(220, 20, 60, 0.8)" : ""};
    width: 100%;
    text-align: center;
    border-radius: 8px;
    color: white;
    padding: 14px 24px;
    font-size: 18px;
    margin-top: 20px;
    transition: all 0.3s;

    &:hover {
        background-color: ${props => props.color === "blue" ? "rgb(0, 65, 140)" : props.color === "red" ? "rgba(140, 0, 40, 0.8)" : ""};
    }
`