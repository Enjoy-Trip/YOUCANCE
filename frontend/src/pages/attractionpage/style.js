import styled from "styled-components";
import IROnly from "styles/IROnly";

export const PageWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`

export const PageHeader = styled.header`
    width: 70px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ddd;
`

export const PageTitle = styled.h1`
    height: 70px;
    padding: 5px;
    border-bottom: 1px solid #ddd;

    & > span {
        ${IROnly}
    }
`

export const PageLogo = styled.p`
    font-family: 'Righteous';
    line-height: 60px;
    color: #0284FE;
    font-size: 50px;
    text-align: center;
`

export const NavButton = styled.button`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.1s;
    color: #777;

    & > i {
        font-size: 20px;
    }

    & > span {
        margin-top: 8px;
        font-size: 12px;
    }

    &:hover {
        color: #0284FE;
    }
`

export const PageMain = styled.main`
    width: 100%;
    display: flex;
    position: relative;
`

export const PageMapSectionHeader = styled.header`
    ${IROnly}
`

export const SectionResult = styled.section`
    width: 380px;
    height: 100vh;
    padding-top: 15px;
    box-shadow: 5px 0 5px -2px #ccc;
    display: flex;
    flex-direction: column;
`

export const SectionResultHeader = styled.header`
    ${IROnly}
`

export const SearchForm = styled.form`
    margin: 0 25px 15px;
    border: 2px solid #0284FE;
    border-radius: 5px;
    display: flex;

    & > label {
        ${IROnly}
    }
`

export const FormButton = styled.button`
    color: #0284FE;

    & > span {
        ${IROnly}
    }
`

export const SearchButton = styled(FormButton)`
    margin-left: 12px;
    margin-right: 3px;
`

export const SearchInput = styled.input`
    border: none;
    height: 42px;
    line-height: 40px;
    font-size: 16px;
    flex-grow: 1;

    &:focus {
        outline: none;
    }

    &::placeholder {
        vertical-align: top;
    }
`

export const DeleteButton = styled(FormButton)`
    margin-left: 3px;
    margin-right: 12px;
`

export const ConditionList = styled.ul`
    width: 100%;
    padding: 10px 25px 30px;
    display: grid;
    grid-template-columns: 100px 100px 100px;
    gap: 15px;
    border-bottom: 1px solid #eee;
    position: relative;
`

export const AttractionList = styled.ul`
    padding-top: 30px;
    /* height: calc(100vh - 75px); */
    flex-grow: 1;
    overflow-y: scroll;
    
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

