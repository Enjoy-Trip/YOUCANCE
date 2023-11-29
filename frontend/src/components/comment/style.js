import styled from "styled-components";
import IROnly from "styles/IROnly";

export const StyledListItem = styled.li`
    width: 100%;
    margin-bottom: 20px;
    font-size: 12px;
    line-height: 15px;
`

export const StyledWrapper = styled.div`
    width: 100%;
    margin-bottom: 8px;
    display: flex;
    /* height: 20px; */

    & > p {
        display: block;
        font-weight: 700;
        margin-right: 8px;
    }
`

export const StypedSpan = styled.span`
    display: ${props => !props.show ? "block" : "none"};
`

export const StyledForm = styled.form`
    width: 100%;
    display: ${props => props.show ? "flex" : "none"};

    & > label {
        ${IROnly}
    }

    & > input {
        border: none;
        border-bottom: 1px solid #ccc;
        flex-grow: 1;
        color: #777;
    }

    & > input:focus {
        outline: none;
    }

    & > button {
        background-color: #0284FE;
        font-size: 11px;
        margin-left: 10px;
        color: white;
        padding: 2px 5px;
        border-radius: 3px;
    }
`

export const StyledAdditionalWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    & > p {
        font-size: 10px;
        color: #aaa;
    }
`

export const StyledButtonList = styled.ul`
    display: ${props => props.display};
    gap: 8px;
`

export const StyledButton = styled.button`
    font-size: 10px;
    padding: 0;
`