import { useState, useRef, useEffect } from 'react'
import * as Styled from './style'
import FormButton from 'components/button/formButton/FormButton';
import { useSelector, useDispatch } from 'react-redux';
import { writeBoard } from 'servieces/BoardService';

function ImagePreview({ image, deleteFunc }) {
    return (
        <Styled.ImagePreview draggable>
            <img src={image} alt="preview" />
            <Styled.ImagePreviewIconWrapper onClick={deleteFunc}>
                <i className="fas fa-times"></i>
            </Styled.ImagePreviewIconWrapper>
        </Styled.ImagePreview>
    );
}

export default function BoardWriteCard({ max = 10, props: { writeShow } }) {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [userInputs, setUserInputs] = useState({
        title: "",
        content: ""
    })
    const uploadBoxRef = useRef();
    const inputRef = useRef();
    const userInputRef = useRef([]);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const uploadBox = uploadBoxRef.current;
        const input = inputRef.current;

        const handleFiles = (files) => {
            for (const file of files) {
                if (!file.type.startsWith("image/")) continue;
                const reader = new FileReader();
                reader.onloadend = (e) => {
                    const result = e.target.result;
                    if (result) {
                        setUploadedImages((state) => [...state, result].slice(0, max));
                    }
                };
                reader.readAsDataURL(file);
            }
        };

        const changeHandler = (event) => {
            const files = event.target.files;
            handleFiles(files);
        };

        const dropHandler = (event) => {
            event.preventDefault();
            event.stopPropagation();
            const files = event.dataTransfer.files;
            handleFiles(files);
        };

        const dragOverHandler = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };

        uploadBox.addEventListener("drop", dropHandler);
        uploadBox.addEventListener("dragover", dragOverHandler);
        input.addEventListener("change", changeHandler);

        return () => {
            uploadBox.removeEventListener("drop", dropHandler);
            uploadBox.removeEventListener("dragover", dragOverHandler);
            input.removeEventListener("change", changeHandler);
        };
    }, [max]);

    useEffect(() => {
        const imageJSXs = uploadedImages.map((image, index) => {
            const isDeleteImage = (element) => {
                return element === image;
            };

            const deleteFunc = () => {
                uploadedImages.splice(uploadedImages.findIndex(isDeleteImage), 1);
                setUploadedImages([...uploadedImages]);
            };

            return <ImagePreview image={image} deleteFunc={deleteFunc} key={index} />;
        });
        setPreviewImages(imageJSXs);
    }, [uploadedImages]);

    const handleChange = (e) => {
        setUserInputs({
            ...userInputs,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (uploadedImages.length == 0) {
            alert("이미지를 입력해주세요!");
            return;
        }

        if (!userInputs.title || !userInputs.content) {
            alert("제목과 내용을 입력해주세요!");
            return;
        }

        await writeBoard(userInputs.title, userInputs.content, uploadedImages, user, dispatch);

        window.location.reload();
    }

    return (
        <Styled.StyledWrapper writeShow={writeShow}>
            <Styled.StyledSection onClick={e => e.stopPropagation()}>
                <Styled.StyledSectionHeader>
                    <h2>새 게시물 만들기</h2>
                </Styled.StyledSectionHeader>
                <Styled.StyledFrom>
                    <Styled.StyledImageFieldset>
                        <legend>이미지 입력 영역</legend>
                        <Styled.StyledImageUploadBox >
                            <Styled.StyledImageUploadLabel htmlFor="imgInput" ref={uploadBoxRef}>
                                <Styled.StyledImageUploadTextBox>
                                    <p>드래그 또는 클릭하여 업로드</p>
                                    <span>권장사항: oooMB 이하 고화질</span>
                                </Styled.StyledImageUploadTextBox>
                                <div>
                                    <i className="fas fa-arrow-circle-up"></i>
                                </div>
                            </Styled.StyledImageUploadLabel>
                            <input type="file" multiple accept="image/*" id="imgInput" ref={inputRef} />
                            <Styled.StyledPreviewWrapper>
                                <Styled.StyledPreviewContainer>{previewImages}</Styled.StyledPreviewContainer>
                            </Styled.StyledPreviewWrapper>
                        </Styled.StyledImageUploadBox>
                    </Styled.StyledImageFieldset>
                    <Styled.StyledContentFieldset>
                        <legend>내용 입력 영역</legend>
                        <label htmlFor="title">제목 입력</label>
                        <input 
                            type="text" name="title" id="title" placeholder='제목 입력...' 
                            ref={(element) => (userInputRef.current[0] = element)}
                            onChange={handleChange} 
                            value={userInputs.title} />
                        <label htmlFor="content">내용 입력</label>
                        <Styled.StyledTextarea 
                            name="content" id="content" cols="30" rows="10" placeholder='문구 입력...'
                            ref={(element) => (userInputRef.current[1] = element)}
                            onChange={handleChange}
                            value={userInputs.content} />
                        <FormButton data={{
                            onClickFunc: onSubmit,
                            content: "게시하기",
                            color: "blue"
                        }} />
                    </Styled.StyledContentFieldset>
                </Styled.StyledFrom>
            </Styled.StyledSection>
        </Styled.StyledWrapper>
    )
}
