import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as Styled from './style'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { getAttractionCategoty, getAttractionImages, getComments, writeComment, updateComment, deleteComment } from 'servieces/AttractionService';
import Comment from 'components/comment/Comment';

function defaultFunc() {}

export default function AttractionDetailCard({ props: { data } }) {
    const dispatch = useDispatch();
    const CategoryRef = useRef([]);
    const WrapperRef = useRef([]);
    const InputRef = useRef();
    const SectionRef = useRef();
    const [commentList, setCommentList] = useState([]);
    const [input, setInput] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]);
    const [tab, setTab] = useState(0);
    const [commentContent, setCommentContent] = useState({ func: defaultFunc });
    const user = useSelector(state => state.user);

    const getCommentList = async () => {
        const result = await getComments(data.contentid, user, dispatch);

        setCommentList(result);
        setInput("");
    }

    useLayoutEffect(() => {
        const getCategory = async () => {
            const result = await getAttractionCategoty(data.contenttypeid, data.cat1, data.cat2, data.cat3);

            setCategory(result.name);
        }

        const getImages = async () => {
            const result = await getAttractionImages(data.contentid);

            setImages(result);
        }

        SectionRef.current.style.display = 'flex';

        getCategory();
        getImages();
        getCommentList();
    }, [data]);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const onClickHandler = (e) => {
        const tabIndex = e.currentTarget.dataset.key;

        setTab(tabIndex);
    }

    const onCommentClick = async (e) => {
        e.preventDefault();
        
        await writeComment(data.contentid, input, user, dispatch);

        setInput("");
        getCommentList();
    }

    const onCloseClick = () => {
        SectionRef.current.style.display = 'none';
    }

    const updateHandler = async (e) => {
        const commentNo = e.currentTarget.dataset.key;
        const content = commentContent.func();

        await updateComment(commentNo, content, user, dispatch);

        getCommentList();
    }

    const deleteHandler = async (e) => {
        const commentNo = e.currentTarget.dataset.key;

        await deleteComment(commentNo, user, dispatch);

        getCommentList();
    }

    return (
        <Styled.SectionDetail ref={SectionRef}>
            <Styled.HeaderImage src={data.firstimage} alt="" />
            <Styled.SectionHeader>
                <Styled.SectionHeaderWrapper>
                    <Styled.SectionTitle>{data.title}</Styled.SectionTitle>
                    <Styled.SectionHeaderParagraph>{category ? category : " "}</Styled.SectionHeaderParagraph>
                </Styled.SectionHeaderWrapper>
                <Styled.SectionHeaderList>
                    <Styled.SectionHeaderListItem>
                        <Styled.SectionHeaderListItemButton>
                            <i className="fa-regular fa-heart"></i>
                            <i className="fa-solid fa-heart"></i>
                            <span>좋아요</span>
                        </Styled.SectionHeaderListItemButton>
                    </Styled.SectionHeaderListItem>
                    <Styled.SectionHeaderListItem>
                        <Styled.SectionHeaderListItemButton>
                            <i className="fas fa-search"></i>
                            <span>검색</span>
                        </Styled.SectionHeaderListItemButton>
                    </Styled.SectionHeaderListItem>
                    <Styled.SectionHeaderListItem>
                        <Styled.SectionHeaderListItemButton>
                            <i className="far fa-sticky-note"></i>
                            <span>계획</span>
                        </Styled.SectionHeaderListItemButton>
                    </Styled.SectionHeaderListItem>
                </Styled.SectionHeaderList>
            </Styled.SectionHeader>
            <Styled.SectionCategoryList>
                <Styled.SectionCategoryListItem>
                    <Styled.SectionCategoryButton ref={(element) => (CategoryRef.current[0] = element)} selected={tab} index={0} onClick={onClickHandler} data-key={0}>
                        <span>홈</span>
                    </Styled.SectionCategoryButton>
                </Styled.SectionCategoryListItem>
                <Styled.SectionCategoryListItem>
                    <Styled.SectionCategoryButton ref={(element) => (CategoryRef.current[1] = element)} selected={tab} index={1} onClick={onClickHandler} data-key={1}>
                        <span>리뷰</span>
                    </Styled.SectionCategoryButton>
                </Styled.SectionCategoryListItem>
                <Styled.SectionCategoryListItem>
                    <Styled.SectionCategoryButton ref={(element) => (CategoryRef.current[2] = element)} selected={tab} index={2} onClick={onClickHandler} data-key={2}>
                        <span>사진</span>
                    </Styled.SectionCategoryButton>
                </Styled.SectionCategoryListItem>
            </Styled.SectionCategoryList>
            <Styled.HomeWrapper ref={(element) => (WrapperRef.current[0] = element)} selected={tab} index={0} >
                <Styled.HomeParahraph>
                    <i className="fas fa-location"></i>
                    <span>{data.addr1}{data.addr2 ? ", " + data.addr2 : ""}</span>
                </Styled.HomeParahraph>
                <Styled.HomeUrlWrapper>
                    <i className="fas fa-home"></i>
                    <Styled.HomeUrlList>
                        {
                            data.homepage ? data.homepage.split("<br />").map(url => <li key={url.substring(0, url.indexOf('<'))}>
                                <Link to={url.substring(url.indexOf('>') + 1, url.lastIndexOf('<'))} target='_blank' >{url.substring(url.indexOf('>') + 1, url.lastIndexOf('<'))}</Link>
                            </li>) : "홈페이지가 존재하지 않습니다."
                        }
                    </Styled.HomeUrlList>
                </Styled.HomeUrlWrapper>
                <Styled.HomeParahraph>
                    <i className="fas fa-sticky-note"></i>
                    <span>{data.overview ? data.overview.replace(/<br>/g, " ").replace(/<br \/>/g, " ") : "설명이 존재하지 않습니다."}</span>
                </Styled.HomeParahraph>
            </Styled.HomeWrapper>
            <Styled.ReviewWrapper ref={(element) => (WrapperRef.current[1] = element)} selected={tab} index={1}>
                {
                    commentList ? commentList.map((comment, index) => <Comment props={{ 
                        comment, 
                        type: 'attraction', 
                        isWriter: comment.attractionCommentLoginCheck, 
                        updateFunc: updateHandler,
                        deleteFunc: deleteHandler,
                        setCommentFunc: setCommentContent
                    }} key={index} />) : <></>
                }
                <Styled.ReviewForm>
                    <label htmlFor="commentInput">댓글 입력</label>
                    <Styled.ReviewFormInput type="text" id='commentInput' placeholder={user.refreshToken ? '댓글 작성...' : '로그인 한 후 댓글을 달 수 있습니다!'} readOnly={user.refreshToken ? false : true} ref={InputRef} onChange={onChangeHandler} value={input} />
                    <Styled.ReviewFormButton onClick={onCommentClick} display={user.refreshToken ? "block" : "none"} >게시</Styled.ReviewFormButton>
                </Styled.ReviewForm>
            </Styled.ReviewWrapper>
            <Styled.PictureWrapper ref={(element) => (WrapperRef.current[2] = element)} selected={tab} index={2}>
                {
                    images ? images.map(image => <Link to={image.originimgurl} target='_blank' key={image.serialnum} ><img src={image.originimgurl} alt='' /></Link>) : <>이미지가 없습니다.</>
                }
            </Styled.PictureWrapper>
            <Styled.StyledCloseButton onClick={onCloseClick}>
                <span>닫기</span>
                <i className="fa-solid fa-x"></i>
            </Styled.StyledCloseButton>
        </Styled.SectionDetail>
    )
}
