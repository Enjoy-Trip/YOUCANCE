import { useCallback, useEffect, useRef, useState } from 'react'
import * as Styled from './style'
import { useSelector, useDispatch } from 'react-redux'

import BoardDetailCarousel from 'components/carousel/boardDetailCarousel/BoardDetailCarousel'
import Comment from 'components/comment/Comment'

import { deleteBoard, getComments, writeComment, updateComment, deleteComment } from 'servieces/BoardService'

import BoardModifyCard from '../boardModifyCard/BoardModifyCard'

function defaultFunc() { }

export default function BoardDetailCard({ props: { data, detailShow, updateBoardList } }) {
    const [commentList, setCommentList] = useState([]);
    const [input, setInput] = useState("");
    const [commentContent, setCommentContent] = useState({ func: defaultFunc });
    const [updateShow, setUpdateShow] = useState(-1);
    const inputRef = useRef();
    const buttonRef = useRef();
    const containerRef = useRef();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    const updateUpdateShow = useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();

        setUpdateShow(1);
    }, [updateShow]);

    useEffect(() => {
        const button = buttonRef.current;

        if (!button) {
            return;
        }

        button.addEventListener("click", updateUpdateShow);

        return () => {
            if (!button) {
                return;
            }

            button.removeEventListener("click", updateUpdateShow);
        };
    }, [updateUpdateShow, commentList]);

    const getBoard = async () => {
        const result = await getComments(data.boardNo, user, dispatch);

        setCommentList(result);
        setInput("");
    }

    useEffect(() => {
        getBoard();
    }, [data]);

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!input) {
            alert("내용을 입력해주세요!");
            return;
        }

        await writeComment(data.boardNo, input, user, dispatch);

        setInput("");
        getBoard();
    }

    const updateHandler = async (e) => {
        const commentNo = e.currentTarget.dataset.key;
        const content = commentContent.func();

        await updateComment(commentNo, content, user, dispatch);

        getBoard();
    }

    const deleteHandler = async (e) => {
        const commentNo = e.currentTarget.dataset.key;

        await deleteComment(commentNo, user, dispatch);

        getBoard();
    }

    const deleteBoardHandler = async (e) => {
        const boardNo = e.currentTarget.dataset.key;

        await deleteBoard(boardNo, user, dispatch);

        updateBoardList();
    }

    return (
        <Styled.StyledWrapper detailShow={detailShow} ref={containerRef} >
            <Styled.StyledSection onClick={e => e.stopPropagation()}>
                {
                    data.boardNo ?
                        <>
                            <header>
                                <h2>게시글 상세 영역</h2>
                            </header>
                            <BoardDetailCarousel props={{ images: data.boardImages }} />
                            <Styled.StyledContentWrapper>
                                <Styled.StyledBoardTitleWrapper>
                                    <span>{data.boardTitle}</span>
                                    <span>{data.boardTime}</span>
                                    <Styled.StyledTitleContentWrapper>
                                        <span>{data.boardUser.userId}</span>
                                        <p>{data.boardContent}</p>
                                    </Styled.StyledTitleContentWrapper>
                                </Styled.StyledBoardTitleWrapper>
                                <Styled.StyledCommentList>
                                    {
                                        commentList ? commentList.map(comment => <Comment key={comment.boardCommentNo + comment.boardNo} props={{
                                            comment: comment,
                                            type: 'board',
                                            isWriter: comment.boardCommentLoginCheck,
                                            updateFunc: updateHandler,
                                            deleteFunc: deleteHandler,
                                            setCommentFunc: setCommentContent
                                        }} />) : <></>
                                    }

                                </Styled.StyledCommentList>
                                <Styled.CommentForm>
                                    <label htmlFor="commentInput">댓글 입력</label>
                                    <Styled.CommentFormInput
                                        type="text" id='commentInput'
                                        placeholder={user.refreshToken ? '댓글 작성...' : "로그인 후 댓글을 달 수 있습니다!"}
                                        readOnly={user.refreshToken ? false : true}
                                        ref={inputRef}
                                        onChange={inputHandler}
                                        value={input} />
                                    <Styled.CommentFormButton
                                        display={user.refreshToken ? "block" : "none"}
                                        onClick={submitHandler}>게시
                                    </Styled.CommentFormButton>
                                </Styled.CommentForm>
                                <Styled.StyledAdditionalButtonList display={data.boardLoginCheck ? "flex" : "none"}>
                                    <li>
                                        <Styled.StyledModifyButton ref={buttonRef}>
                                            수정
                                        </Styled.StyledModifyButton>
                                    </li>
                                    <li>
                                        <Styled.StyledDeleteButton data-key={data.boardNo} onClick={deleteBoardHandler}>
                                            삭제
                                        </Styled.StyledDeleteButton>
                                    </li>
                                </Styled.StyledAdditionalButtonList>
                            </Styled.StyledContentWrapper>
                        </> : <></>
                }
            </Styled.StyledSection>
            <BoardModifyCard props={{ updateShow, setUpdateShow, data }} />
        </Styled.StyledWrapper>
    )
}