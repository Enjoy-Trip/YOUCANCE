import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from 'redux/slice/userSlice'

import * as Styled from './style'
import loginpagemorning from 'assets/images/loginpagemorning.jpg'
import loginpageafternoon from 'assets/images/loginpageafternoon.jpg'
import loginpageevening from 'assets/images/loginpageevening.jpg'

import FormInputCol from 'components/input/formInputCol/FormInputCol'
import FormButton from 'components/button/formButton/FormButton'

import { Login, findPassword } from 'servieces/UserServices'

const checkTime = () => {
    const date = new Date();
    const now = date.getHours();

    if (now >= 6 && now <= 11) {
        return {
            time: "morning",
            image: loginpagemorning
        };
    }

    else if (now >= 12 && now <= 18) {
        return {
            time: "afternoon",
            image: loginpageafternoon
        };
    }

    else {
        return {
            time: "evening",
            image: loginpageevening
        };
    }
}

export default function LoginPage() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef([]);
    const findRef = useRef([]);
    const time = checkTime();
    const [writeShow, setWriteShow] = useState(false);

    const [inputs, setInputs] = useState({
        id: "",
        password: "",
    });

    const [finds, setFinds] = useState({
        id: "",
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    }

    const handleCheck = async (e) => {
        e.preventDefault();

        if (!inputs.id) {
            alert('아이디를 입력해주세요!');
            return;
        }

        if (!inputs.password) {
            alert('비밀번호를 입력해주세요!');
            return;
        }

        const result = await Login(inputs.id, inputs.password);

        if (result) {
            dispatch(loginUser({
                accessToken: result['Access-Token'],
                refreshToken: result['Refresh-Token']
            }));

            navigate('/');
        }
    }

    const handleFindsChange = (e) => {
        setFinds({
            ...finds,
            [e.target.name]: e.target.value,
        });
    }

    const handleFindsCheck = async (e) => {
        e.preventDefault();

        if (!finds.id) {
            alert('아이디를 입력해주세요!');
            return;
        }

        if (!finds.name) {
            alert('이름을 입력해주세요!');
            return;
        }

        if (!finds.email) {
            alert('이메일을 입력해주세요!');
            return;
        }

        await findPassword(finds.id, finds.name, finds.email, user, dispatch);
    }

    const toggle = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setWriteShow(!writeShow);
        setFinds({
            id: "",
            name: "",
            email: ""
        })
    }

    useEffect(() => {
        window.addEventListener('click', () => {
            setWriteShow(false);
        })
    }, []);

    return (
        <Styled.StyledMain time={time.time}>
            <Styled.StyledSection time={time.time}>
                <Styled.StyledSectionHeader>
                    <h2>회원정보 입력 영역</h2>
                </Styled.StyledSectionHeader>
                <Styled.StyledArticleWrapper time={time.time}>
                    <Styled.StyledArticle>
                        <header>
                            <Styled.StyledArticleTitle>Good {time.time}<span></span>Welcome back!!</Styled.StyledArticleTitle>
                        </header>
                        <Styled.StyledForm>
                            <FormInputCol data={{
                                text: 'Id',
                                type: 'text',
                                id: 'id',
                                name: 'id',
                                onChangeFunc: handleChange,
                                ref: (element) => (inputRef.current[0] = element),
                                placeholder: 'Your Id',
                                value: inputs.id
                            }} />
                            <FormInputCol data={{
                                text: 'Password',
                                type: 'password',
                                id: 'password',
                                name: 'password',
                                onChangeFunc: handleChange,
                                ref: (element) => (inputRef.current[1] = element),
                                placeholder: 'Your Password',
                                value: inputs.password
                            }} />
                            <FormButton data={{
                                onClickFunc: handleCheck,
                                content: "Sign in",
                                color: "blue"
                            }} />
                        </Styled.StyledForm>
                        <Styled.StyledArticleParagraph>Don‘t have an account?</Styled.StyledArticleParagraph>
                        <Styled.StyledArticleAnchor href="/user/register">Sign up</Styled.StyledArticleAnchor>
                        <Styled.StyledArticleParagraph>or</Styled.StyledArticleParagraph>
                        <Styled.StyledArticleAnchor href="/user/findpassword" onClick={toggle}>Forgot Password?</Styled.StyledArticleAnchor>
                    </Styled.StyledArticle>
                </Styled.StyledArticleWrapper>
                <Styled.StyledImage src={time.image} alt="" />
                {
                    writeShow ? <Styled.ArticleWrapper props={{ writeShow }} >
                        <Styled.FindArticle time={time.time} onClick={e => e.stopPropagation()}>
                            <header>
                                <h3>회원 정보 입력 영역</h3>
                            </header>
                            <Styled.StyledArticleForm>
                            <FormInputCol data={{
                                text: 'Id',
                                type: 'text',
                                id: 'id',
                                name: 'id',
                                onChangeFunc: handleFindsChange,
                                ref: (element) => (findRef.current[0] = element),
                                placeholder: 'Your Id',
                                value: finds.id
                            }} />
                            <FormInputCol data={{
                                text: 'name',
                                type: 'text',
                                id: 'name',
                                name: 'name',
                                onChangeFunc: handleFindsChange,
                                ref: (element) => (findRef.current[1] = element),
                                placeholder: 'Your Name',
                                value: finds.name
                            }} />
                            <FormInputCol data={{
                                text: 'email',
                                type: 'text',
                                id: 'email',
                                name: 'email',
                                onChangeFunc: handleFindsChange,
                                ref: (element) => (findRef.current[2] = element),
                                placeholder: 'Your Email',
                                value: finds.email
                            }} />
                            <FormButton data={{
                                onClickFunc: handleFindsCheck,
                                content: "Find Password",
                                color: "blue"
                            }} />
                        </Styled.StyledArticleForm>
                        </Styled.FindArticle>
                    </Styled.ArticleWrapper> : <></>
                }
            </Styled.StyledSection>
        </Styled.StyledMain>
    )
}