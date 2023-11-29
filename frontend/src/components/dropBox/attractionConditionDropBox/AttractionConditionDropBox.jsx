import { useCallback, useEffect, useRef, useState } from 'react'
import * as Styled from './style'


export default function AttractionConditionDropBox({ props: {
    icon, text, conditions, setConditions, type
} }) {
    const buttonRef = useRef();
    const listRef = useRef();
    const [visible, setVisible] = useState(0);

    const updateVisible = useCallback((e) => {
        e.stopPropagation();
        setVisible(1 - visible);
    }, [visible]);

    const unshowVisible = useCallback(() => {
        setVisible(0);
    }, [visible]);

    useEffect(() => {
        const button = buttonRef.current;

        button.addEventListener("click", updateVisible);
        window.addEventListener("click", unshowVisible);

        return () => {
            button.removeEventListener("click", updateVisible);
            window.removeEventListener("click", unshowVisible);
        };
    }, [updateVisible]);

    const ClickHandler = (e) => {
        setConditions({
            ...conditions,
            [type]: e.currentTarget.childNodes[0].innerText,
        })
    }

    return (
        <Styled.ConditionListItem>
            <Styled.ConditionButton ref={buttonRef}>
                {icon}
                <span>{conditions[type] ? conditions[type] : text}</span>
            </Styled.ConditionButton>
            <Styled.ConditionNameList ref={listRef} visible={visible}>
                {
                    !!conditions && conditions[type + 'List'].length !== 0 ?
                        conditions[type + 'List'].map(data => {
                            return (
                                <Styled.ConditionNameListItem key={data.code}>
                                    <Styled.ConditionNameButton onClick={ClickHandler}>
                                        <span>{data.name}</span>
                                    </Styled.ConditionNameButton>
                                </Styled.ConditionNameListItem>
                            )
                        }) :
                        <>
                            <Styled.ConditionNameListItem>
                                <Styled.ConditionNameButton>
                                    <span>이전 단계를</span>
                                </Styled.ConditionNameButton>
                            </Styled.ConditionNameListItem>
                            <Styled.ConditionNameListItem>
                                <Styled.ConditionNameButton>
                                    <span>선택해주세요</span>
                                </Styled.ConditionNameButton>
                            </Styled.ConditionNameListItem>
                        </>
                }

            </Styled.ConditionNameList>
        </Styled.ConditionListItem>
    )
}