import { useEffect, useRef, useState } from 'react'
import * as Styled from './style'


export default function Comment({ props: { comment, type, isWriter, updateFunc, deleteFunc, setCommentFunc } }) {
    const inputRef = useRef();
    const [input, setInput] = useState(comment[type + 'CommentContent']);
    const [isModify, setIsModify] = useState(false);

    const returnInput = () => {
        return input;
    }

    useEffect(() => {
        setCommentFunc({
            func: returnInput
        });
    }, [input]);

    const onUpdateHandler = () => {
        setIsModify(true);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        updateFunc(e);
        setIsModify(false);
    }

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    }

    return (
        <Styled.StyledListItem>
            <Styled.StyledWrapper>
                <p>{comment[type + 'CommentUser'].userId}</p>
                <Styled.StypedSpan show={isModify}>
                    {comment[type + 'CommentContent']}
                    </Styled.StypedSpan>
                <Styled.StyledForm show={isModify}>
                    <label htmlFor="modifyInput">수정할 내용</label>
                    <input type="text" id='modifyInput' ref={inputRef} onChange={onChangeHandler} value={input} />
                    <button onClick={onSubmitHandler} data-key={comment[type + 'CommentNo']}>완료</button>
                </Styled.StyledForm>
            </Styled.StyledWrapper>
            <Styled.StyledAdditionalWrapper>
                <p>{comment[type + 'CommentTime']}</p>
                <Styled.StyledButtonList display={isWriter ? "flex" : "none"}>
                    <li>
                        <Styled.StyledButton onClick={onUpdateHandler}>
                            <span>수정</span>
                        </Styled.StyledButton>
                    </li>
                    <li>
                        <Styled.StyledButton onClick={deleteFunc} data-key={comment[type + 'CommentNo']}>
                            <span>삭제</span>
                        </Styled.StyledButton>
                    </li>
                </Styled.StyledButtonList>
            </Styled.StyledAdditionalWrapper>
        </Styled.StyledListItem>
    )
}
