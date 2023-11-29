import FetchTemplate from "utils/FetchTemplate"
import { refreshToken } from "utils/RefreshToken";

const url = "http://localhost:8080";

const areaUrl = "https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=" + process.env.REACT_APP_DATA_KEY + "&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=YOUCANCE&_type=json&areaCode=";

const AttractionUrl = "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=" + process.env.REACT_APP_DATA_KEY + "&numOfRows=100000&pageNo=1&MobileOS=ETC&MobileApp=YOUCANCE&_type=json&listYN=Y&arrange=O";

const AttractionSearchUrl = "https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=" + process.env.REACT_APP_DATA_KEY + "&numOfRows=100000&pageNo=1&MobileOS=ETC&MobileApp=YOUCANCE&_type=json&listYN=Y&arrange=A&keyword="

const AttractionDetailUrl = "https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=" + process.env.REACT_APP_DATA_KEY + "&MobileOS=ETC&MobileApp=YOUCANCE&_type=json&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=10&pageNo=1&contentId="

const AttractionCategoryUrl = "https://apis.data.go.kr/B551011/KorService1/categoryCode1?serviceKey=" + process.env.REACT_APP_DATA_KEY + "&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=YOUCANCE"

const AttractionImageUrl = "https://apis.data.go.kr/B551011/KorService1/detailImage1?serviceKey=" + process.env.REACT_APP_DATA_KEY + "&MobileOS=ETC&MobileApp=YOUCANCE&_type=json&imageYN=Y&subImageYN=Y&numOfRows=100&pageNo=1&contentId="

export async function getAreaList() {
    try {
        const response = await FetchTemplate({
            path: areaUrl,
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item;
    } catch (error) {
        console.log(error);
    }
}

export async function getAreaDetailList(code) {
    try {
        const response = await FetchTemplate({
            path: areaUrl + code,
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item;
    } catch (error) {
        console.log(error);
    }
}

export async function getAttractionList(area, contenttype, sigungu) {
    try {
        const response = await FetchTemplate({
            path: AttractionUrl + "&contentTypeId=" + contenttype + "&areaCode=" + area + "&sigunguCode=" + sigungu,
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item;
    } catch (error) {
        console.log(error);
    }
}

export async function searchAttractionList(keyword) {
    try {
        const response = await FetchTemplate({
            path: AttractionSearchUrl + keyword,
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item;
    } catch (error) {
        console.log(error);
    }
}


export async function getAttractionDetail(contentid) {
    try {
        const response = await FetchTemplate({
            path: AttractionDetailUrl + contentid,
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item[0];
    } catch (error) {
        console.log(error);
    }
}

export async function getAttractionCategoty(contenttypeid, cat1, cat2, cat3) {
    try {
        const response = await FetchTemplate({
            path: AttractionCategoryUrl + "&contentTypeId=" + contenttypeid + "&cat1=" + cat1 + "&cat2=" + cat2 + "&cat3=" + cat3 + "&_type=json",
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item[0];
    } catch (error) {
        console.log(error);
    }
}

export async function getAttractionImages(contentid) {
    try {
        const response = await FetchTemplate({
            path: AttractionImageUrl + contentid,
            method: 'GET',
        });

        const result = await response.json();

        return result.response.body.items.item;
    } catch (error) {
        console.log(error);
    }
}

export async function getComments(contentid, user, dispatch) {
    try {
        let token = "";

        if (user.accessToken) {
            token = await refreshToken(dispatch, user);
        }

        const response = await FetchTemplate({
            path: url + '/attraction/' + contentid + '/comment',
            method: 'GET',
            needToken: user.accessToken ? true : false,
            token: token
        });

        const result = await response.json();

        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export async function writeComment(contentid, content, user, dispatch) {
    try {
        const responseComment = await FetchTemplate({
            path: url + '/attraction/comment',
            method: 'POST',
            needToken: true,
            token: user.accessToken,
            body: JSON.stringify({
                "contentid": contentid,
                "attractionCommentContent": content
            })
        });

        const resultComment = await responseComment.json();

        if (resultComment.state === "SUCCESS") {
            alert(resultComment.message);
            return;
        }

        const token = await refreshToken(dispatch, user);

        const responseCommentRefresh = await FetchTemplate({
            path: url + '/attraction/comment',
            method: 'POST',
            needToken: true,
            token: token,
            body: JSON.stringify({
                "contentid": contentid,
                "attractionCommentContent": content
            })
        });

        const resultCommentRefresh = await responseCommentRefresh.json();

        alert(resultCommentRefresh.message);
        return;
    } catch (error) {
        console.log(error);
    }
}

export async function updateComment(commentNo, content, user, dispatch) {
    try {
        const responseUpdate = await FetchTemplate({
            path: url + '/attraction/comment/' + commentNo,
            method: 'PUT',
            needToken: true,
            token: user.accessToken,
            body: JSON.stringify({
                "attractionCommentContent": content,
            })
        });

        const resultUpdate = await responseUpdate.json();

        if (resultUpdate.state === "SUCCESS") {
            alert(resultUpdate.message);
            return;
        }

        const token = await refreshToken(dispatch, user);

        const responseUpdateRefresh = await FetchTemplate({
            path: url + '/attraction/comment/' + commentNo,
            method: 'PUT',
            needToken: true,
            token: token,
            body: JSON.stringify({
                "attractionCommentContent": content,
            })
        });

        const resultUpdateRefresh = await responseUpdateRefresh.json();

        alert(resultUpdateRefresh.message);
        return;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteComment(commentNo, user, dispatch) {
    try {
        const responseDelete = await FetchTemplate({
            path: url + '/attraction/comment/' + commentNo,
            method: 'DELETE',
            needToken: true,
            token: user.accessToken
        });

        const resultDelete = await responseDelete.json();

        if (resultDelete.state === "SUCCESS") {
            alert(resultDelete.message);
            return;
        }

        const token = await refreshToken(dispatch, user);

        const responseDeleteRefresh = await FetchTemplate({
            path: url + '/attraction/comment/' + commentNo,
            method: 'DELETE',
            needToken: true,
            token: token
        });

        const resultDeleteRefresh = await responseDeleteRefresh.json();

        alert(resultDeleteRefresh.message);
        return;
    } catch (error) {
        console.log(error);
    }
}
