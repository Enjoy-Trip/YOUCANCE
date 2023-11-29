import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router'

import * as Styled from './style'
import registerpagemorning from 'assets/images/registerpagemorning.jpg'
import registerpageafternoon from 'assets/images/registerpageafternoon.jpg'
import registerpageevening from 'assets/images/registerpageevening.jpg'

import FormInputCol from 'components/input/formInputCol/FormInputCol'
import FormButton from 'components/button/formButton/FormButton'

import { CheckId, Signup } from 'servieces/UserServices'

const checkTime = () => {
    const date = new Date();
    const now = date.getHours();

    if (now >= 6 && now <= 11) {
        return {
            time: "morning",
            image: registerpagemorning
        };
    }

    else if (now >= 12 && now <= 18) {
        return {
            time: "afternoon",
            image: registerpageafternoon
        };
    }

    else {
        return {
            time: "evening",
            image: registerpageevening
        };
    }
}

export default function RegisterPage() {
    const navigate = useNavigate();
    const inputRef = useRef([]);
    const paragraphRef = useRef([]);
    const time = checkTime();

    const [inputs, setInputs] = useState({
        id: "",
        password: "",
        passwordConfirm: "",
        name: "",
        nickname: ""
    });

    const [validities, setValidities] = useState({
        id: "init",
        idMessage: "",
        password: "init",
        passwordMessage: ""
    });

    const handleChange = async (e) => {
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

        if (inputs.password !== inputs.passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다!');
            return;
        }

        if (!inputs.name) {
            alert('이름을 입력해주세요!');
            return;
        }

        if (!inputs.nickname) {
            alert('별명을 입력해주세요!');
            return;
        }

        await Signup(inputs.id, inputs.password, inputs.name, inputs.nickname);

        navigate('/user/login');
    }

    const checkIdInput = useCallback(async () => {
        let result;

        if (inputRef.current[0].value.length === 0) {
            result = {
                state: "FAIL",
                message: "아이디를 입력해주세요."
            }
        } else {
            result = await CheckId(inputRef.current[0].value);
        }

        setValidities({
            ...validities,
            "id": result.state,
            "idMessage": result.message,
        })
    }, [validities]);

    const checkPasswordInput = useCallback(async () => {
        let result;

        if (inputRef.current[2].value.length === 0) {
            result = {
                state: "FAIL",
                message: "비밀번호를 입력해주세요."
            }
        }
        
        else if (inputRef.current[1].value !== inputRef.current[2].value) {
            result = {
                state: "FAIL",
                message: "비밀번호가 일치하지 않습니다."
            }
        }
        
        else {
            result = {
                state: "SUCCESS",
                message: ""
            }
        }

        setValidities({
            ...validities,
            "password": result.state,
            "passwordMessage": validities.password === "init" ? "" : result.message,
        })
    }, [validities]);

    useEffect(() => {
        checkIdInput();
    }, [inputs.id]);

    useEffect(() => {
        checkPasswordInput();
    }, [inputs.passwordConfirm]);

    return (
        <Styled.StyledMain time={time.time}>
            <Styled.StyledSection time={time.time}>
                <Styled.StyledSectionHeader>
                    <h2>회원정보 입력 영역</h2>
                </Styled.StyledSectionHeader>
                <Styled.StyledImage src={time.image} alt="" />
                <Styled.StyledArticleWrapper time={time.time}>
                    <Styled.StyledArticle>
                        <header>
                            <Styled.StyledArticleTitle>Good {time.time}!<span></span>Become part of the family!!</Styled.StyledArticleTitle>
                        </header>
                        <Styled.StyledForm>
                            <fieldset>
                                <legend>아이디 영역</legend>
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
                                <Styled.StyledValidityParagraph validity={validities.id} ref={(element) => (paragraphRef.current[0] = element)} >
                                    {validities.idMessage}
                                </Styled.StyledValidityParagraph>
                            </fieldset>
                            <fieldset>
                                <legend>비밀번호 입력 영역</legend>
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
                                <FormInputCol data={{
                                    text: 'Confirm Password',
                                    type: 'password',
                                    id: 'passwordConfirm',
                                    name: 'passwordConfirm',
                                    onChangeFunc: handleChange,
                                    ref: (element) => (inputRef.current[2] = element),
                                    placeholder: 'Confirm Your Password',
                                    value: inputs.passwordConfirm
                                }} />
                                <Styled.StyledValidityParagraph validity={validities.password} ref={(element) => (paragraphRef.current[1] = element)} >
                                    {validities.passwordMessage}
                                </Styled.StyledValidityParagraph>
                            </fieldset>
                            <fieldset>
                                <legend>기타 사용자 정보 입력 영역</legend>
                                <FormInputCol data={{
                                    text: 'Name',
                                    type: 'text',
                                    id: 'name',
                                    name: 'name',
                                    onChangeFunc: handleChange,
                                    ref: (element) => (inputRef.current[3] = element),
                                    placeholder: 'Your Name',
                                    value: inputs.name
                                }} />
                                <FormInputCol data={{
                                    text: 'Nickname',
                                    type: 'text',
                                    id: 'nickname',
                                    name: 'nickname',
                                    onChangeFunc: handleChange,
                                    ref: (element) => (inputRef.current[4] = element),
                                    placeholder: 'Your Nickname',
                                    value: inputs.nickname
                                }} />
                            </fieldset>
                            <FormButton data={{
                                onClickFunc: handleCheck,
                                content: "Create my account",
                                color: "blue"
                            }} />
                        </Styled.StyledForm>
                        <Styled.StyledArticleParagraph>Already have an account?</Styled.StyledArticleParagraph>
                        <Styled.StyledArticleAnchor href="/user/login">Sign in</Styled.StyledArticleAnchor>
                    </Styled.StyledArticle>
                </Styled.StyledArticleWrapper>
            </Styled.StyledSection>
        </Styled.StyledMain>
    )
}