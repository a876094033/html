/**
 * 유입경로 기타 산택 시 input 활성화 처리
 *
 * @returns
 */
function fnCngInflow() {
    $("#inflowEtc").val("");
    $("#inflowEtc").prop("disabled", true);

    if ($("#inflowRoute").val() == '99') {
        $("#inflowEtc").prop("disabled", false);
        $("#inflowEtc").focus();
    }
}

/**
 * 회원 로그인
 *
 * @param url
 * @returns
 */
function fnLogin(url) {
    $.post(url, $("#frmLogin").serialize(),
    function(data) {
        if (data.result == "success") {
            location.href = $('#rurl').val();
        } else {
            var error_txt;
            error_txt       = data.msg.split(":");
            swal(error_txt[1]);
            if (error_txt[0] != "no_txt")
                $("#" + error_txt[0]).focus();
        }
    }, "json");
    return false;
}

/**
 * 회원가입
 *
 * @param url
 * @param rtu
 * @returns
 */
function fnJoin(url, rtu) {
    $.post(url, $("#frmJoin").serialize(),
    function(data) {
        if (data.result == "success") {
            location.href   = rtu;
        } else {
            var error_txt;
            error_txt       = data.msg.split(":");
            swal(error_txt[1]);
            if (error_txt[0] != "no_txt")
                $("#" + error_txt[0]).focus();
        }
    }, "json");
    return false;
}

/**
 * 패스워드 검증
 *
 * @param val
 * @returns
 */
function fnPassNavi(val) {
    var nregix  = /[0-9]/g;
    var eregix  = /[a-zA-Z]/ig;
    var gregix  = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    var cregix  = val.length;

    $("#pass_nav_n, #pass_nav_e, #pass_nav_g, #pass_nav_c").css("text-decoration", "none").css("color","");

    if (nregix.test(val)) {
        $("#pass_nav_n").css("text-decoration", "line-through").css("color", "red");
    }

    if (eregix.test(val)) {
        $("#pass_nav_e").css("text-decoration", "line-through").css("color", "red");
    }

    if (gregix.test(val)) {
        $("#pass_nav_g").css("text-decoration", "line-through").css("color", "red");
    }

    if (cregix >= 8 && cregix<= 20) {
        $("#pass_nav_c").css("text-decoration", "line-through").css("color", "red");
    }
}

/**
 * 비밀번호 찾기
 *
 * @param url
 * @returns
 */
function fnFindPw(url, rtu) {
    $.post(url, $("#frmPassword").serialize(),
    function(data) {
        if (data.result == "success") {
            location.href   = rtu;
        } else {
            var error_txt;
            error_txt       = data.msg.split(":");
            swal(error_txt[1]);
            if (error_txt[0] != "no_txt")
                $("#" + error_txt[0]).focus();
        }
    }, "json");

    return false;
}
