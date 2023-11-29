import { useEffect, useRef, useState } from 'react'
import * as Style from './style';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';
import { clearUser } from 'redux/slice/userSlice';

import FormButton from 'components/button/formButton/FormButton';
import FormInputCol from 'components/input/formInputCol/FormInputCol';
import { myInfo, updateUser, deleteUser } from 'servieces/UserServices';

const urls = ['/user/login', '/user/register', '/user/info']

const checkTime = (location) => {
    if (!urls.includes(location.pathname)) {
        return "";
    }

    const date = new Date();
    const now = date.getHours();

    if (now >= 6 && now <= 11) {
        return "morning";
    }

    else if (now >= 12 && now <= 18) {
        return "afternoon";
    }

    else {
        return "evening";
    }
}

export default function Header() {
    const [moved, setMoved] = useState(false);
    const user = useSelector(state => state.user);
    const location = useLocation();
    const dispatch = useDispatch();
    const [nowUser, setNowUser] = useState({});
    const [isCheck, setCheck] = useState(false);
    const inputsRef = useRef([]);
    const [inputs, setInputs] = useState({
        id: "",
        password: "",
        passwordConfirm: "",
        name: "",
        nickname: ""
    });

    function signout() {
        dispatch(clearUser());
        alert("로그아웃 되었습니다.");
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
                setMoved(true);
            } else {
                setMoved(false);
            }
        });
    }, []);

    const handleModifyChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    }

    const handleModifyCheck = async (e) => {
        e.preventDefault();
        
        await updateUser(inputs.id, inputs.password, inputs.name, inputs.nickname, user, dispatch);

        setCheck(false);
        setInputs({
            ...inputs,
            password: "",
            passwordConfirm: ""
        })
    }

    const handleDeleteCheck = async (e) => {
        e.preventDefault();

        await deleteUser(user, dispatch);

        dispatch(clearUser());
        setCheck(false);
    }

    const toggle = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setCheck(!isCheck);
    }

    useEffect(() => {
        const getNowUser = async () => {
            const result = await myInfo(user, dispatch);

            setNowUser(result);
        }

        getNowUser();

        window.addEventListener('click', () => {
            setCheck(false);
        });
    }, []);

    useEffect(() => {
        if (!nowUser) {
            return;
        }

        setInputs({
            ...inputs,
            "id": nowUser.userId,
            "name": nowUser.userName,
            "nickname": nowUser.userNickname
        });
    }, [nowUser]);

    return (
        <>
            <Style.HeaderWrapper moved={moved ? true : false} time={checkTime(location)}>
                <Style.DivWrapper>
                    <Style.HeaderTitle>
                        <Link to="/">YOUCANCE</Link>
                    </Style.HeaderTitle>
                    <nav>
                        <Style.HeaderNavList>
                            <li>
                                <Link to="/attraction">Places</Link>
                            </li>
                            <li>
                                <Link to="/board">Community</Link>
                            </li>
                            {
                                user.refreshToken
                                    ?
                                    <>
                                        <li>
                                            <Link to="/user/info" onClick={toggle}>My info</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={signout}>Sign out</Link>
                                        </li>
                                    </>
                                    :
                                    <li>
                                        <Link to="/user/login" >Sign in</Link>
                                    </li>
                            }
                        </Style.HeaderNavList>
                    </nav>
                </Style.DivWrapper>
            </Style.HeaderWrapper>
            {
                isCheck ? <Style.ArticleWrapper>
                    <Style.FindArticle onClick={e => e.stopPropagation()}>
                        <header>
                            <h2>회원 정보 입력 영역</h2>
                        </header>
                        <Style.StyledArticleForm>
                            <FormInputCol data={{
                                text: 'Id',
                                type: 'text',
                                id: 'id',
                                name: 'id',
                                ref: (element) => (inputsRef.current[0] = element),
                                placeholder: 'Your Id',
                                value: inputs.id,
                                readOnly: true
                            }} />
                            <FormInputCol data={{
                                text: 'Password',
                                type: 'password',
                                id: 'password',
                                name: 'password',
                                onChangeFunc: handleModifyChange,
                                ref: (element) => (inputsRef.current[1] = element),
                                placeholder: 'New Password',
                                value: inputs.password
                            }} />
                            <FormInputCol data={{
                                text: 'Confirm Password',
                                type: 'password',
                                id: 'passwordConfirm',
                                name: 'passwordConfirm',
                                onChangeFunc: handleModifyChange,
                                ref: (element) => (inputsRef.current[2] = element),
                                placeholder: 'Confirm New Password',
                                value: inputs.passwordConfirm
                            }} />
                            <FormInputCol data={{
                                text: 'Name',
                                type: 'text',
                                id: 'name',
                                name: 'name',
                                onChangeFunc: handleModifyChange,
                                ref: (element) => (inputsRef.current[3] = element),
                                placeholder: 'New Name',
                                value: inputs.name
                            }} />
                            <FormInputCol data={{
                                text: 'Nickname',
                                type: 'text',
                                id: 'nickname',
                                name: 'nickname',
                                onChangeFunc: handleModifyChange,
                                ref: (element) => (inputsRef.current[4] = element),
                                placeholder: 'New Nickname',
                                value: inputs.nickname
                            }} />
                            <FormButton data={{
                                onClickFunc: handleModifyCheck,
                                content: "Update Profile",
                                color: "blue"
                            }} />
                            <FormButton data={{
                                onClickFunc: handleDeleteCheck,
                                content: "Delete my account",
                                color: "red"
                            }} />
                        </Style.StyledArticleForm>
                    </Style.FindArticle>
                </Style.ArticleWrapper> : <></>
            }
        </>
    )
}
