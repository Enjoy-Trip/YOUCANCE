import styled from "styled-components";
import IROnly from "styles/IROnly";

export const SectionDetail = styled.section`
    width: 380px;
    height: 100vh;
    position: absolute;
    left: 380px;
    border-left: 1px solid #ccc;
    box-shadow: 5px 0 5px -2px #ccc;
    background-color: white;
    display: flex;
    flex-direction: column;
`

export const HeaderImage = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
`

export const SectionHeader = styled.header`
    padding: 16px 14px;
    border-bottom: 5px solid #eee;
`

export const SectionHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 5px;
    margin-bottom: 20px;
`

export const SectionTitle = styled.h2`
    font-size: 21px;
    font-weight: 700;
    max-width: 70%;
`

export const SectionHeaderParagraph = styled.p`
    font-size: 16px;
    max-width: 30%;
    color: #aaa;
`

export const SectionHeaderList = styled.ul`
    display: flex;
    padding: 15px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;

    & > li + li {
        border-left: 1px solid #eee;
    }
`

export const SectionHeaderListItem = styled.li`
    flex-grow: 1;
`

export const SectionHeaderListItemButton = styled.button`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40px;
    gap: 5px;

    & > i {
        font-size: 20px;
    }

    & > i:nth-child(2) {
        display: none;
    }
`

export const SectionCategoryList = styled.ul`
    display: flex;
    border-bottom: 1px solid #eee;
`

export const SectionCategoryListItem = styled.li`
    flex-grow: 1;
`

export const SectionCategoryButton = styled.button`
    width: 100%;
    height: 46px;

    & > span {
        display: inline-block;
        width: fit-content;
        line-height: 43px;

        border-bottom: ${props => props.selected == props.index ? "3px solid #777" : ""};
        color: ${props => props.selected == props.index ? "#black" : "#777"};
        font-weight: ${props => props.selected == props.index ? "700" : "400"};
    }
`

export const SectionContent = styled.div`
    padding: 0 18px;
    overflow-y: scroll;
    overflow-x: hidden;
    flex-grow: 1;
    position: relative;
    

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

export const HomeWrapper = styled(SectionContent)`
    display: ${props => props.selected == props.index ? "block" : "none"};
    color: #777;

    & i {
        margin-right: 10px;
        margin-left: 5px;
        color: #777;
    }
`

export const HomeParahraph = styled.p`
    display: flex;
    padding: 18px 0;
    border-bottom: 1px solid #eee;

    & > span {
        line-height: 20px;
        margin-top: -2px;
    }
`

export const HomeUrlWrapper = styled.div`
    display: flex;
    width: 300px;
    padding: 18px 0;
    border-bottom: 1px solid #eee;
`

export const HomeUrlList = styled.ul`
    /* display: flex;
    flex-direction: column;
    gap: 10px; */

    & a {
        display: inline-block;
        width: 310px;
        color: #0284FE;
        text-decoration: underline;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const ReviewWrapper = styled(SectionContent)`
    padding: 20px 20px 50px;
    display: ${props => props.selected == props.index ? "block" : "none"};
`

export const ReviewForm = styled.form`
    width: 340px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 60px;
    padding: 15px 5px;
    border-top: 1px solid #eee;
    background-color: white;

    & > label {
        ${IROnly}
    }
`

export const ReviewFormInput = styled.input`
    border: 0;
    flex-grow: 1;

    &:focus {
        outline: 0;
    }
`

export const ReviewFormButton = styled.button`
    margin-left: 20px;
    color: #0284FE;
    display: ${props => props.display};
`

export const PictureWrapper = styled(SectionContent)`
    display: ${props => props.selected == props.index ? "grid" : "none"};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto, auto);
    gap: 5px;
    padding: 20px;
    flex-grow: 0;

    & > a {
        height: fit-content;
    }

    & img {
        width: 100%;
        border-radius: 5px;
    }
`

export const StyledCloseButton = styled.button`
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 3px;
    border: 1px solid #0284FE;
    top: 5px;
    right: -45px;

    & > span {
        ${IROnly}
    }

    & > i {
        font-size: 24px;
        color: #0284FE;
    }
`