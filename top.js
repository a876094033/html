
var item = sessionStorage.getItem("token");
if (item) {
    document.write("<li><a href=\"/mypage-dashboard.html\">마이소딧</a> </li>\n" +
        "                <li class=\"logout\"><a href=\"/\">로그아웃</a></li>");
}else {
    document.write("<li class=\"util\"><a href=\"/login.html\">로그인</a></li>\n" +
        " <li class=\"util primary\"><a href=\"/join.html\">회원가입</a></li>");
}


