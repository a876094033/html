var URL = "";

var error_register_email_confirm = "两次输入的邮箱不一致";
var error_register_password_confirm = "两次输入的密码不一致";
var error_register_protocol_error = "请先同意注册协议";

var error_login_password_verify = "账号或密码不正确";
var success_invest = "投资成功";

var borrow_wait_audit = "待审核";
var borrow_collects = "募集中";
var borrow_repaying = "还款中";
var borrow_repay = "已还完";
var borrow_days = "天";
var borrow_month = "个月";

$(".logout").click(function(){
    window.sessionStorage.removeItem("token")
});
