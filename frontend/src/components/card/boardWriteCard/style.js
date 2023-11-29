import styled from "styled-components";
import IROnly from "styles/IROnly";

export const StyledWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: ${props => props.writeShow == 1 ? 'block' : "none"};
`

export const StyledSection = styled.section`
    width: 50vw;
    height: 70vh;
    position: absolute;
    top: 15vh;
    left: 25vw;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`
export const StyledSectionHeader = styled.header`
    height: 50px;
    text-align: center;
    padding: 15px;
    border-bottom: 1px solid #eee;

    & > h2 {
        font-weight: 700;
        line-height: 20px;
    }
`

export const StyledFrom = styled.form`
    display: flex;
`

export const StyledImageFieldset = styled.fieldset`
    width: 60%;
    height: calc(70vh - 50px);
    border-right: 1px solid #eee;

    & > legend {
        ${IROnly}
    }
`

export const ImagePreview = styled.div`
    @keyframes ImagePreview_construct {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    animation: ImagePreview_construct 0.5s;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ImagePreviewIconWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    margin: 5px;
    background-color: #c4c4c4;
    border-radius: 50%;

    & > i {
        color: white;
    }
`

export const StyledImageUploadBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    & > * {
        width: 100%;
        border-radius: 3px;
    }

    & > input {
        display: none;
    }
`

export const StyledImageUploadLabel = styled.label`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    background-color: #0284FE;
    color: white;
    padding: 20px 50px;
    height: 150px;
    transition: all 0.1s;

    &:hover {
        background-color: rgb(0, 65, 140);
    }

    & i {
        font-size: 32px;
    }
`

export const StyledImageUploadTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
        font-size: 14px;
        margin-bottom: 20px;
    }

    & > span {
        font-size: 10px;
    }
`

export const StyledPreviewWrapper = styled.div`
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #b8b8b8;
`

export const StyledPreviewContainer = styled.div`
    width: 100%;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 116px);
    column-gap: 11px;
    row-gap: 10px;

    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #7c7c7c;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #a6a6a6;
    }

    &::-webkit-scrollbar-track {
        background: #ededed;
        border-radius: 10px;
    }
`

export const StyledContentFieldset = styled.fieldset`
    width: 40%;
    height: calc(70vh - 50px);
    padding: 10px;
    display: flex;
    flex-direction: column;

    & > legend {
        ${IROnly}
    }

    & > textarea:focus {
        outline: none;
    } 

    & label {
        ${IROnly}
    }

    & > input {
        height: 30px;
        border: none;
        padding-bottom: 8px;
        border-bottom: 1px solid #eee;
        margin-bottom: 15px;
    }

    & > input:focus {
        outline: none;
    }

    & > button {
        margin-top: 15px;
    }
`

export const StyledTextarea = styled.textarea`
    display: block;
    border: none;
    resize: none;
    flex-grow: 1;
    border-bottom: 1px solid #eee;

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