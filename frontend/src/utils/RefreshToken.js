import FetchTemplate from "utils/FetchTemplate"
import { updateToken, clearUser } from "redux/slice/userSlice";

const url = "http://localhost:8080";

export async function refreshToken(dispatch, user) {
    const responseToken = await FetchTemplate({
        path: url + '/user/refresh',
        method: 'POST',
        body: JSON.stringify({
            "refreshToken": user.refreshToken
        })
    });

    const resultToken = await responseToken.json();

    if (resultToken.state === "FAIL") {
        dispatch(clearUser);
        alert(resultToken.message);
    }

    dispatch(updateToken({
        accessToken: resultToken.data
    }));

    return resultToken.data;
}