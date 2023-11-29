import styled from "styled-components";
import IROnly from "styles/IROnly";

export const StyledWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: ${props => props.detailShow == 1 ? "block" : "none"};
`

export const StyledSection = styled.section`
    width: 70vw;
    height: 90vh;
    position: absolute;
    top: 5vh;
    left: 15vw;
    border-radius: 5px;
    background-color: white;
    display: flex;
    overflow: hidden;

    & > header {
        ${IROnly}
    }
`

export const StyledImageList = styled.ul`
    width: 60%;
    display: flex;
    overflow: hidden;
`

export const StyledContentWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: white;
`

export const StyledBoardTitleWrapper = styled.div`
    width: 100%;
    padding: 30px 25px 20px;
    border: 1px solid #eee;
    /* box-shadow: 0 -1px 10px 0 #eee; */
    display: flex;
    flex-direction: column;

    & > span:nth-child(1) {
        font-size: 16px;
        font-weight: 700;
        flex-grow: 1;
        text-align: center;
    }

    & > span:nth-child(2) {
        color: #aaa;
        font-size: 10px;
        text-align: right;
        margin: 10px 0 20px;
    }
`

export const StyledTitleContentWrapper = styled.div`
    line-height: 18px;

    & > span {
        display: inline-block;
        margin-right: 10px;
        font-size: 12px;
        font-weight: 700;
    }

    & > p {
        display: inline;
        color: #555;
        font-size: 13px;
    }
`

export const StyledCommentList = styled.ul`
    width: 100%;
    flex-grow: 1;
    overflow-y: scroll;
    padding: 20px 20px 0 20px;

    &::-webkit-scrollbar {
        width: 4px;
        background-color: #eee;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #bbb;
        border-radius: 10px;
        background-clip: padding-box;
    }

    &::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }
`

export const CommentForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 10px 20px;
    border-top: 1px solid #eee;

    /* display: none; */

    & > label {
        ${IROnly}
    }
`

export const CommentFormInput = styled.input`
    border: 0;
    flex-grow: 1;
    height: 42px;

    &:focus {
        outline: 0;
    }
`

export const CommentFormButton = styled.button`
    margin-left: 20px;
    color: #0284FE;
    display: ${props => props.display};
`

export const StyledAdditionalButtonList = styled.ul`
    border-top: 1px solid #eee;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
`

export const StyledButton = styled.button`
    padding: 0;
    color: white;
    padding: 10px 40px;
    border-radius: 8px;
`

export const StyledModifyButton = styled(StyledButton)`
    background-color: #0284FE;
`

export const StyledDeleteButton = styled(StyledButton)`
    background-color: rgba(220, 20, 60, 0.8);
`