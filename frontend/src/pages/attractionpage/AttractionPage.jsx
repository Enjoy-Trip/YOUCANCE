import { useEffect, useRef, useState } from 'react'
import * as Styled from './style'
import { Link, useLocation  } from 'react-router-dom'

import MyMap from 'components/map/MyMap'
import AttractionListCard from '../../components/card/attractionListCard/AttracionListCard'
import AttractionDetailCard from 'components/card/attractionDetailCard/AttractionDetailCard'
import AttractionConditionDropBox from 'components/dropBox/attractionConditionDropBox/AttractionConditionDropBox'

import { getAreaList, getAreaDetailList, getAttractionList, searchAttractionList, getAttractionDetail } from 'servieces/AttractionService';

const position = {
    "서울": {
        lat: 37.5519,
        lng: 126.9918,
        zoom: 12
    },
    "인천": {
        lat: 37.4563,
        lng: 126.7052,
        zoom: 12
    },
    "대전": {
        lat: 36.3398,
        lng: 127.3940,
        zoom: 12
    },
    "대구": {
        lat: 35.8294,
        lng: 128.5655,
        zoom: 12
    },
    "광주": {
        lat: 35.1557,
        lng: 126.8354,
        zoom: 12
    },
    "부산": {
        lat: 35.1753,
        lng: 129.0689,
        zoom: 12
    },
    "울산": {
        lat: 35.5537,
        lng: 129.2381,
        zoom: 12
    },
    "세종특별자치시": {
        lat: 36.5607,
        lng: 127.2587,
        zoom: 12
    },
    "경기도": {
        lat: 37.5289,
        lng: 127.1728,
        zoom: 9
    },
    "강원도": {
        lat: 37.7250,
        lng: 128.3010,
        zoom: 9
    },
    "충청북도": {
        lat: 36.7378,
        lng: 127.8305,
        zoom: 9
    },
    "충청남도": {
        lat: 36.5296,
        lng: 126.8591,
        zoom: 9
    },
    "경상북도": {
        lat: 36.3436,
        lng: 128.7402,
        zoom: 9
    },
    "경상남도": {
        lat: 35.3696,
        lng: 128.2570,
        zoom: 9
    },
    "전라북도": {
        lat: 35.7197,
        lng: 127.1244,
        zoom: 9
    },
    "전라남도": {
        lat: 34.9402,
        lng: 126.9565,
        zoom: 9
    },
    "제주도": {
        lat: 33.3846,
        lng: 126.5535,
        zoom: 10
    }
}

export default function AttractionPage() {
    const SearchInputRef = useRef();
    const [searchInput, setSearchInput] = useState("");
    const [attractionList, setAttractionList] = useState([]);
    const [attractionFilterList, setAttractionFilterList] = useState([]);
    const [conditions, setConditions] = useState({
        "area": "",
        "areaList": [],
        "sigungu": "",
        "sigunguList": [],
        "contenttype": "",
        "contenttypeList": []
    });
    const [attractionDetail, setAttractionDetail] = useState({});
    const [center, setCenter] = useState({
        lat: 37.5519,
        lng: 126.9918
    })
    const [zoom, setZoom] = useState(10);
	const location = useLocation();
    
    useEffect(() => {
        const checkState = async () => {
            if (!location.state) {
                return;
            }
    
            setSearchInput(location.state.attractionTitle);

            const result = await searchAttractionList(location.state.attractionTitle);
    
            setAttractionList(result.filter(e => !!e.firstimage ? true : false));
            setAttractionFilterList([]);
            setAttractionDetail({});
        }
        
        checkState();
    }, [])

    useEffect(() => {
        const notExistSearchResult = async () => {
            if (!conditions.area || !conditions.contenttype || !conditions.sigungu) {
                return;
            }

            const areaData = conditions.areaList.filter(element => element.name === conditions.area)[0];
            const contenttypeData = conditions.contenttypeList.filter(element => element.name === conditions.contenttype)[0];
            const areaDetailData = conditions.sigunguList.filter(element => element.name === conditions.sigungu)[0];

            const result = await getAttractionList(areaData.code, contenttypeData.code, areaDetailData.code);

            if (result.length === 0) {
                setAttractionList([]);
                return;
            }

            setAttractionList(result.filter(attraction => attraction.homepage === "" ? false : true).filter(attraction => attraction.overview === "" || attraction.overview === "-" ? false : true));
        }

        const existSearchResult = () => {
            const areaData = conditions.areaList.filter(element => element.name === conditions.area)[0];
            const contenttypeData = conditions.contenttypeList.filter(element => element.name === conditions.contenttype)[0];
            const areaDetailData = conditions.sigunguList.filter(element => element.name === conditions.sigungu)[0];

            let list = attractionList.map(attraction => attraction);

            if (areaData) {
                list = list.filter(attraction => attraction.areacode == areaData.code);
            }

            if (areaDetailData) {
                list = list.filter(attraction => attraction.sigungucode == areaDetailData.code);
            }

            if (contenttypeData) {
                list = list.filter(attraction => attraction.contenttypeid == contenttypeData.code);
            }

            setAttractionFilterList(list);
        }

        const attrcationList = async () => {
            if (searchInput) {
                existSearchResult();
            } else {
                await notExistSearchResult();
            }

            setAttractionDetail({});
        }

        attrcationList();
    }, [conditions.area, conditions.contenttype, conditions.sigungu]);

    useEffect(() => {
        const getData = async () => {
            if (conditions.areaList.length !== 0 && conditions.contenttypeList.length !== 0) {
                return;
            }

            let areaList = await getAreaList();

            if (!areaList) {
                areaList = [];
            }

            const contentTypeList = [
                {
                    'name': '관광지',
                    'code': 12,
                },
                {
                    'name': '문화시설',
                    'code': 14,
                },
                {
                    'name': '축제공연행사',
                    'code': 15,
                },
                {
                    'name': '레포츠',
                    'code': 28,
                },
                {
                    'name': '숙박',
                    'code': 32,
                },
                {
                    'name': '쇼핑',
                    'code': 38,
                },
                {
                    'name': '음식점',
                    'code': 39,
                }
            ]

            setConditions({
                ...conditions,
                "areaList": areaList,
                "contenttypeList": contentTypeList
            })
        }

        getData();
    }, []);

    useEffect(() => {
        const getData = async () => {
            const data = conditions.areaList.filter(element => element.name === conditions.area)[0];

            if (!data) {
                return
            }

            const sigunguList = await getAreaDetailList(data.code);

            setCenter({
                lat: position[data.name].lat,
                lng: position[data.name].lng
            });
            setZoom(position[data.name].zoom);
            setConditions({
                ...conditions,
                "sigunguList": sigunguList,
                "sigungu": ""
            });
        }

        getData();
    }, [conditions.area]);

    const AttractionClickHandler = async (e) => {
        e.preventDefault();
        const contentid = e.currentTarget.dataset.key;

        const result = await getAttractionDetail(contentid);

        setCenter({
            lat: Number(result.mapy),
            lng: Number(result.mapx)
        })
        setZoom(16);
        setAttractionDetail(result);
    }

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleCheck = async (e) => {
        e.preventDefault();

        const keyword = searchInput;
        const result = await searchAttractionList(keyword);

        let test = result.filter(data => data.firstimage ? true : false)

        console.log(test);

        setAttractionList(result.filter(data => data.firstimage ? true : false));
        setAttractionFilterList([]);
        setConditions({
            ...conditions,
            "area": "",
            "sigungu": "",
            "contenttype": "",
        });
        setAttractionDetail({});
    }

    const onDeleteHandler = async (e) => {
        e.preventDefault();

        setAttractionList([]);
        setAttractionFilterList([]);
        setSearchInput("");
    }

    return (
        <Styled.PageWrapper>
            <Styled.PageHeader>
                <Link to="/">
                    <Styled.PageTitle>
                        <span>YOUCANCE</span>
                        <Styled.PageLogo>Y</Styled.PageLogo>
                    </Styled.PageTitle>
                </Link>
                <Styled.NavButton>
                    <i className="fa-solid fa-location-dot"></i>
                    <span>지도 홈</span>
                </Styled.NavButton>
                <Styled.NavButton>
                    <i className="fa-solid fa-signs-post"></i>
                    <span>지역 홈</span>
                </Styled.NavButton>
            </Styled.PageHeader>
            <Styled.PageMain>
                <Styled.SectionResult>
                    <Styled.SectionResultHeader>
                        <h2>결과 출력 부분</h2>
                    </Styled.SectionResultHeader>
                    <Styled.SearchForm action="/">
                        <Styled.SearchButton onClick={handleCheck}>
                            <span>찾기</span>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Styled.SearchButton>
                        <label htmlFor="searchInput">검색어 입력</label>
                        <Styled.SearchInput type="text" id="searchInput" placeholder='지역, 장소 검색' onChange={handleChange} ref={SearchInputRef} value={searchInput} />
                        <Styled.DeleteButton onClick={onDeleteHandler}>
                            <span>결과 삭제</span>
                            <i className="fa-solid fa-x"></i>
                        </Styled.DeleteButton>
                    </Styled.SearchForm>
                    <Styled.ConditionList>
                        <AttractionConditionDropBox props={{
                            icon: <i className="fas fa-location-arrow"></i>,
                            text: '지역',
                            conditions,
                            setConditions,
                            type: 'area'
                        }} />
                        <AttractionConditionDropBox props={{
                            icon: <i className="fas fa-tasks-alt"></i>,
                            text: '세부 지역',
                            conditions,
                            setConditions,
                            type: 'sigungu'
                        }} />
                        <AttractionConditionDropBox props={{
                            icon: <i className="fas fa-list"></i>,
                            text: '분류',
                            conditions,
                            setConditions,
                            type: 'contenttype'
                        }} />
                    </Styled.ConditionList>
                    <Styled.AttractionList>
                        {
                            !!searchInput && (!!conditions.area || !!conditions.sigungu || !!conditions.contenttype)
                                ? 
                                attractionFilterList.filter(data => data.firstimage ? true : false).map((data) => {
                                    return <AttractionListCard key={data.contentid} props={{ data, AttractionClickHandler }} />
                                }) 
                                :  
                                attractionList 
                                    ?
                                    attractionList.filter(data => data.firstimage ? true : false).map((data) => {
                                        return <AttractionListCard key={data.contentid} props={{ data, AttractionClickHandler }} />}) 
                                    : 
                                    <></>
                        }
                    </Styled.AttractionList>
                </Styled.SectionResult>
                <section>
                    <Styled.PageMapSectionHeader>
                        <h2>지도 영역</h2>
                    </Styled.PageMapSectionHeader>
                    <MyMap props={{ list: !!searchInput && (!!conditions.area || !!conditions.sigungu || !!conditions.contenttype) ? attractionFilterList : attractionList, setAttractionDetail, getAttractionDetail,center, setCenter, zoom, updateZoom: setZoom }} />
                </section>
                {
                    attractionDetail.contentid ? <AttractionDetailCard props={{ data: attractionDetail }} /> : <></>
                }
            </Styled.PageMain>
        </Styled.PageWrapper>
    )
}
