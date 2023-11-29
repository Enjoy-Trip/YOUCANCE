use trip;

-- ------------------------유저---------------------------- --

/*user*/
-- 관리자 아이디 생성 1
insert into user(user_id, user_password, user_name, user_profile, user_nickname)
values ("admin", "1234", "관리자", "얼굴.jpg", "얼큰이");

-- 회원 아이디 생성 2
insert into user(user_id, user_password, user_name, user_profile, user_nickname)
values ("abcd", "abcd", "김일반", "얼굴.jpg", "연두리");

-- 회원 아이디 생성 3
insert into user(user_id, user_password, user_name, user_profile, user_nickname)
values ("user3", "user3", "신야경", "얼굴.jpg", "야경왕");

-- 회원 아이디 생성 4
insert into user(user_id, user_password, user_name, user_profile, user_nickname)
values ("user4", "user4", "조트랙", "얼굴.jpg", "맨시티팬입니다만");

-- 회원 아이디 생성 5
insert into user(user_id, user_password, user_name, user_profile, user_nickname)
values ("user5", "user5", "성욱백", "얼굴.jpg", "화끈한 분노");

-- 회원 아이디 생성 6
insert into user(user_id, user_password, user_name, user_profile, user_nickname)
values ("user6", "user6", "도티응앗", "얼굴.jpg", "도티응앗");

-- 회원 아이디 생성 7
insert into user(user_id, user_password, user_name, user_profile, user_nickname)
values ("user7", "user7", "채우주", "얼굴.jpg", "중위권수호자맨유");

-- 회원 아이디 생성 8
insert into user(user_id, user_password, user_name, user_profile, user_nickname)
values ("user8", "user8", "김민재", "얼굴.jpg", "김민재맨유이적설");

-- 회원 아이디 생성 9
insert into user(user_id, user_password, user_name, user_profile, user_nickname)
values ("user9", "user9", "", "얼굴.jpg", "감가상각");

-- 회원 아이디 생성 10
insert into user(user_id, user_password, user_name, user_profile, user_nickname)
values ("user10", "user10", "복우리", "얼굴.jpg", "복우리");

-- 회원 아이디 생성 11
insert into user(user_id, user_password, user_name, user_profile, user_nickname)
values ("user11", "user11", "모가로스", "얼굴.jpg", "스톤에이지");

-- 회원 아이디 생성 12
insert into user(user_id, user_password, user_name, user_profile, user_nickname)
values ("user12", "user12", "박목장", "얼굴.jpg", "목장주인");
-- ------------------------게시판---------------------------- --


/*board*/
-- 게시판 데이터 생성
-- 1
insert into board(user_no, board_title, board_type)
values("1", "공지사항입니다", 0);
-- 2
insert into board(user_no, board_title, board_type)
values("2", "여기 야경이 기가 막혀요.", 1);
-- 3
insert into board(user_no, board_title, board_type)
values("2", "여기 가보셨어요?", 1);
-- 4
insert into board(user_no, board_title, board_type)
values("2", "사이트가 기가 막히네요.", 1);
-- 5
insert into board(user_no, board_title, board_type)
values("2", "소개받고 왔습니다.", 1);
-- 6
insert into board(user_no, board_title, board_type)
values("2", "잘 부탁드려요!", 1);
-- 7
insert into board(user_no, board_title, board_type)
values("2", "영화 그래비티를 보고왔습니다.", 1);
-- 8
insert into board(user_no, board_title, board_type)
values("2", "우산 챙기세요~", 1);
-- 9
insert into board(user_no, board_title, board_type)
values("2", "허허허 사람들이 많네요.", 1);
-- 10
insert into board(user_no, board_title, board_type)
values("2", "엄청 화목하군요.", 1);
-- 11
insert into board(user_no, board_title, board_type)
values("2", "라오스에도 사막이 있네", 1);
-- 12
insert into board(user_no, board_title, board_type)
values("2", "목장 주인입니다.", 1);

/*board_comment*/
insert into board_comment(user_no, board_no, board_comment_content)
values(2, 1, "안녕하세요. 관리자님 반갑습니다.");

insert into board_comment(user_no, board_no, board_comment_content)
values(1, 2, "안녕하세요 회원님. 즐거운 시간 보내세요^^");

/*board_detail*/
insert into board_detail(board_no, board_content)
values(1, "여행지 사이트입니다. 잘 부탁드립니다.");

insert into board_detail(board_no, board_content)
values(2, "새로운 사이트이군요. 좋은 내용이 많았으면 좋겠습니다");

insert into board_detail(board_no, board_content)
values(3, "하하하 신나는 유캉스를 떠나볼까요");

insert into board_detail(board_no, board_content)
values(4, "제하하하 제 웃음 소리가 제하하하");

insert into board_detail(board_no, board_content)
values(5, "사이트 소개해준 친구 맛난 거라도 사줘야겠어요");

insert into board_detail(board_no, board_content)
values(6, "반갑습니다. 샤레니안에서 왔습니다.");

insert into board_detail(board_no, board_content)
values(7, "광활한 우주의 맛을 느껴보세요.");

insert into board_detail(board_no, board_content)
values(8, "라오스에는 기상청이 없다는 사실을 아시나요?");

insert into board_detail(board_no, board_content)
values(9, "사람이 많은 곳을 찾아서 온 설원의 음유시인입니다.");

insert into board_detail(board_no, board_content)
values(10, "가족 같은 분위기, 놀러오십쇼.");

insert into board_detail(board_no, board_content)
values(11, "세상에 마상에 라오스에 사막이 있다는 사실.");

insert into board_detail(board_no, board_content)
values(12, "저희 집 젖소가 짜낸 우유는 단백질이 풍부하죠.");


-- ------------------------관광지---------------------------- --

/*attraction_info*/
-- 관광지 기본정보 추가
-- contenttypeid = 38 = A04
insert into attraction_info(user_no,contenttypeid,title,addr1,addr2,zipcode,tel,firstimage,firstimage2,areacode,sigungucode,mapx,mapy,mlevel)
 values(1,38,'구미 인동 광명시장','경상북도 구미시 인동중앙로 365길','(황상동)','12345','054-987-6543','www.hacsdo.com','www.alal.com',35,4,10.12345,10.12345,'1');/*attraction_detail_info*/
-- 인동 돼지 부속시장
insert into attraction_info(user_no,contenttypeid,title,addr1,addr2,zipcode,tel,firstimage,firstimage2,areacode,sigungucode,mapx,mapy,mlevel)
 values(1,38,'구미 인동 행복피자','경상북도 구미시 인동중앙로 363길','(황상동)','12346','054-987-1234','pig1.jpg','pig2.jpg',35,4,30.12345,31.12345,'1');


/*attraction_detail_info*/
-- 관광지 상세정보 추가
-- contenttypeid = 38 = A04,  A0401 : 상세 분류 = 쇼핑 ,  A04010200 : 소분류 = 상설 시장
insert into attraction_detail_info(contentid, cat1, cat2, cat3, booktour) 
values (1,'A04','A0401','A04010200','북투어');
-- A04010900 : 특산물판매점
insert into attraction_detail_info(contentid, cat1, cat2, cat3, booktour) 
values (2,'A04','A0401','A04010900','피자시장');


/*atrraction_description*/
-- 관광지 설명
insert into attraction_description (contentid, homepage, overview, telname) 
values (1,'www.gumitrash.com','trash.jpg','광명시장');

insert into attraction_description (contentid, homepage, overview, telname) 
values (2,'www.gumipig.com','pig.jpg','행복피자점');


-- ------------------------계획---------------------------- --

/*plan*/
-- 계획
insert into plan (user_no, plan_title)
values (1, "신나는 구미 인동 투어");

insert into plan (user_no, plan_title)
values (2, "신나는 서울 노원 투어");

/*paln_detail*/
-- 계획 상세
insert into plan_detail (plan_no, plan_start_date, plan_end_date, plan_content) 
values (1, '2023-06-15' , '2023-07-14', '구미인동에 있는 대박 맛집에 갈겁니다~.');

insert into plan_detail (plan_no, plan_start_date, plan_end_date, plan_content) 
values (2, '2023-05-15' , '2023-06-10', '노원에 있는 공원에 놀러갈꺼야!');

/*plan_place_list*/
-- 계획 들릴 장소 리스트
-- 구미 인동 대박 맛집을 계획에 추가
insert into plan_place_list (plan_no, contentid, plan_day)
values (1, 1, 2);
-- 구미 인동 돼지부속을 계획에 추가
insert into plan_place_list (plan_no, contentid, plan_day)
values (1, 2, 3);

-- 서울 노원 공릉 철길을 추가
insert into plan_place_list (plan_no, contentid, plan_day)
values (2, 3, 10);
-- 서울 노원 유명한 카페를 추가
insert into plan_place_list (plan_no, contentid, plan_day)
values (2, 4, 10);

-- ------------------------계획---------------------------- --

/*like_place*/
insert into like_place(user_no, contentid, like_comment)
values(1, 1, "정말 가고 싶은 곳!");

/*news*/
insert into news
values(1, "00축제 23년 6월 1일 시작", "00축제가 6월 1일부터 한 달간 시작한다고 한다. 이번 축제는...", "https://www.yna.co.kr/view/AKR20230518009100057?input=1195m", "festival.jpg", "2023-05-18 06:29");

insert into news
values(2, "00축제 한강대로에서 열린다!", "00축제가 서울시와 협업해서 한강대로에서 열린다고 한다....", "https://www.munhwa.com/news/view.html?no=2023051801039907018001", "festival2.jpg", "2023-05-18 09:58");

/*serach_result*/
insert into search_result(search_word, search_count)
values("구미인동", 10);

insert into search_result(search_word, search_count)
values("칠곡", 20);

insert into attraction_comment(user_no, contentid, attraction_comment_content)
values(1, 2, "여기 정말 싸고 다양한 돼지 부속 부위가 많아요!");

insert into attraction_comment(user_no, contentid, attraction_comment_content)
values(2, 2, "와 정말 가보고 싶은 곳이군요!");

/*board_image*/
-- 1번 게시판
insert into board_image(board_no, board_image)
values(1, "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");

-- 2번 게시판
insert into board_image(board_no, board_image)
values(2, "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");

-- 3번 게시판 야경
insert into board_image(board_no, board_image)
values(3, "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"); 
insert into board_image(board_no, board_image)
values(3, "https://images.unsplash.com/photo-1609650793603-4dd3038d716d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"); 
insert into board_image(board_no, board_image)
values(3, "https://images.unsplash.com/photo-1560317398-937080beaf58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"); 
insert into board_image(board_no, board_image)
values(3, "https://images.unsplash.com/photo-1517924950837-ff2a1ed95306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"); 

-- 4번 게시판 산
insert into board_image(board_no, board_image)
values(4, "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80");
insert into board_image(board_no, board_image)
values(4, "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
insert into board_image(board_no, board_image)
values(4, "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
insert into board_image(board_no, board_image)
values(4, "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=800");


-- 5번 게시판 도심
insert into board_image(board_no, board_image)
values(5, "https://images.unsplash.com/photo-1567284783420-9a5c602d1cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80");
insert into board_image(board_no, board_image)
values(5, "https://images.unsplash.com/photo-1542242476-5a3565835a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80");
insert into board_image(board_no, board_image)
values(5, "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");

-- 6번 게시판 베트남
insert into board_image(board_no, board_image)
values(6, "https://images.unsplash.com/photo-1521993117367-b7f70ccd029d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1140&q=80");
insert into board_image(board_no, board_image)
values(6, "https://images.unsplash.com/photo-1529304344766-6b537de190f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80");


-- 7번 게시판 우주
insert into board_image(board_no, board_image)
values(7, "https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=819&q=80");
insert into board_image(board_no, board_image)
values(7, "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80");
insert into board_image(board_no, board_image)
values(7, "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=879&q=80");

-- 8번 게시판 날씨
insert into board_image(board_no, board_image)
values(8, "https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80");
insert into board_image(board_no, board_image)
values(8, "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");

-- 9번 게시판 강
insert into board_image(board_no, board_image)
values(9, "https://images.unsplash.com/photo-1549486909-73fa91fe2ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80");
insert into board_image(board_no, board_image)
values(9, "https://images.unsplash.com/photo-1626981892174-a793b72d06a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80");
insert into board_image(board_no, board_image)
values(9, "https://images.unsplash.com/photo-1525069126401-9db4959c84af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80");
insert into board_image(board_no, board_image)
values(9, "https://images.unsplash.com/photo-1578552369112-735b0cecbc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80");

-- 10번 게시판 푸른테마
insert into board_image(board_no, board_image)
values(10, "https://images.unsplash.com/photo-1526336179256-1347bdb255ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80");
insert into board_image(board_no, board_image)
values(10, "https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
insert into board_image(board_no, board_image)
values(10, "https://images.unsplash.com/photo-1489183988443-b37b7e119ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80");
insert into board_image(board_no, board_image)
values(10, "https://images.unsplash.com/photo-1441906363162-903afd0d3d52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");

-- 11번 게시판 사막
insert into board_image(board_no, board_image)
values(11, "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80");
insert into board_image(board_no, board_image)
values(11, "https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80");
insert into board_image(board_no, board_image)
values(11, "https://images.unsplash.com/photo-1683009427692-8a28348b0965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");


-- 12번 게시판
insert into board_image(board_no, board_image)
values(12, "https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
insert into board_image(board_no, board_image)
values(12, "https://images.unsplash.com/photo-1595337882901-bf6a7aaa4566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
insert into board_image(board_no, board_image)
values(12, "https://images.unsplash.com/photo-1566040924976-f837330d1a5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80");
insert into board_image(board_no, board_image)
values(12, "https://images.unsplash.com/photo-1571554207497-a70ba03e5fe5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80");
