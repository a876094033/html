var URL = "http://localhost:8090";
var IMG_URL = "";
var error_register_email_confirm = "두번입력한 메일이 일치하지 않습니다.";
var error_register_password_confirm = "두번입력한 비밀번호가 일치하지 않습니다.";
var error_register_protocol_error = "우선 회원등록규약에  동의하셔야 합니다.";

var error_login_password_verify = "입력하신 아이디 혹은 비밀번호가 정확하지 않습니다.";
var success_invest = "투자완료";

var success_register = "등록완료";
var success_login = "로그인완료";
var borrow_wait_audit = "심사대기";
var borrow_collects = "모집중";
var borrow_repaying = "상환중";
var borrow_repay = "상환완료";
var borrow_days = "일";
var borrow_month = "개월";

$(".logout").click(function(){
    window.sessionStorage.removeItem("token")
});
