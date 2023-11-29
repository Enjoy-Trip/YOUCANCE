import styled from "styled-components";
import IROnly from "styles/IROnly";

export const StyledCarouselWrapper = styled.div`
    width: 60%;
    position: relative;
`

export const StyledImageList = styled.ul`
    width: 100%;
    display: flex;
    transition: all 0.4s;
    margin-left: ${props => props.margin}
`

const StyledMoveButton = styled.button`
    position: absolute;
    width: 26px;
    height: 26px;
    background-color: rgba(255, 255, 255, 0.7);
    top: calc(45vh - 13px);
    padding: 0;
    border-radius: 50%;
    align-content: center;
    justify-content: center;
    display: ${props => props.show};

    & > span {
        ${IROnly}
    }

    & > i {
        font-size: 16px;
        line-height: 26px;
        color: #777;
    }
`

export const StyledLeftButton = styled(StyledMoveButton)`
    left: 8px;
`

export const StyledRightButton = styled(StyledMoveButton)`
    right: 8px;
`