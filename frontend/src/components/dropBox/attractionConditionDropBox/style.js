import styled from "styled-components";

export const ConditionListItem = styled.li`
    width: 100%;
`

export const ConditionButton = styled.button`
    width: 100%;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;

    & > i {
        color: #0284FE;
        margin-right: 5px;
        margin-bottom: -2px;
    }

    & > span {
        flex-grow: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #777;
    }
`

export const ConditionNameList = styled.ul`
    width: 350px;
    position: absolute;
    z-index: 100;
    top: 50px;
    left: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, .1);
    background-color: white;
    grid-template-columns: 1fr 1fr;

    display: ${props => props.visible === 1 ? "grid" : "none"};
`

export const ConditionNameListItem = styled.li`
    width: 100%;
    border: 1px solid #eee;
`

export const ConditionNameButton = styled.button`
    width: 100%;
    height: 42px;
    color: #777;
`