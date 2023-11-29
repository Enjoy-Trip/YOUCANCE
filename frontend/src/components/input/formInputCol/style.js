import styled from "styled-components";

export const StyledLabel = styled.label`
    display: block;
    font-family: 'Sofia Sans', sans-serif; 
    font-size: 16px;
    margin-bottom: 10px;
`

export const StyledInput = styled.input`
    font-size: 16px;
    margin-bottom: 30px;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;

    background-color: ${props => props.readOnly ? "#eee" : ""};

    &:focus {
        outline: 1px solid rgb(2, 133, 252);
        outline: ${props => props.readOnly ? "none" : ""};
    }

    &::placeholder {
        color: #ccc;
    }
`