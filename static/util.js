/**
 * text 입력값 검증
 *
 * @param string input_id       input field id
 * @param string msg            경고 메세지
 * @return bool
 */
function validText(input_id, msg) {
    if (!$.trim($("#"+ input_id).val())) {
        alert(msg);
        $("#"+ input_id).focus();
        return false;
    } else {
        return true;
    }
}

/**
 * checkbox|radio 입력값 검증
 *
 * @param string input_name     input field name
 * @param string msg            경고 메세지
 * @return bool
*/
function validCheckboxRadio(input_name, msg) {
    if ($('input[name="'+input_name+'"]').is(':checked')) {
        return true;
    } else {
        alert(msg);
        return false;
    }
}

/**
 * selecr 입력값 검증
 *
 * @param string input_id       input field id
 * @param string msg            경고 메세지
 * @return bool
 */
function validSelect(input_name, msg) {
    sel_val     = $('select[name="'+input_name+'"]').val();
    if (sel_val == "") {
        alert(msg);
        return false;
    } else {
        return true;
    }
}

/**
 * 경우에 따른 입력값 검증
 *
 * @param string id
 * @param bool msg
 * @param string type
 * @param int min
 * @param int max
 */
function isValidate(id, msg, type, min, max) {
    var pattern     = '';
    min     = (typeof min !== 'undefined')? min : false;
    max     = (typeof max !== 'undefined')? max : false;

    switch (type) {
        case 'en' :
            pattern     = /[A-Za-z]/g;
            break;
        case 'num' :
            pattern     = /\d/g;
            break;
        case 'field' :
            pattern     = /^[A-Za-z][A-Za-z0-9_]+$/g;
            break;
        case 'datetime' :
            pattern     = /\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}/g;
            break;
        case 'date' :
            pattern     = /\d{4}-\d{2}-\d{2}/g;
            break;
        case 'mobile' :
            pattern     = /^\d{3}\d{3,4}\d{4}$/;
            break;
    }

    if (pattern.test($('#'+ id).val())) {
        return true;
    } else {
        alert(msg);
        $('#'+ id).focus();
    }
}

/**
 * 입력값이 숫자인지 검증
 *
 * @param object obj
 * @param bool msg
 */
function isNum(obj, msg) {
    var pattern     = /[^0-9]/g;
    msg     = (typeof msg !== 'undefined')? msg : false;

    if (!pattern.test(obj.val())) {
        return true;
    } else {
        if (msg) {
            alert(msg);
        }
        obj.val(obj.val().replace(pattern, ''));
        return false;
    }
}

function TypeCheck (s, spc) {
    var i;

    for (i = 0; i < s.length; i++) {
        if (spc.indexOf(s.substring(i, i + 1)) < 0) {
            return false;
        }
    }
    return true;
}

function commaSplit(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 3자리마다 , 자동입력
function commaInsert(obj) {
    if (!TypeCheck(obj.value , "0123456789,")) {
        alert('숫자만 입력해 주세요.');
        obj.value   = '';
        obj.focus();
        return false;
    }
    obj.value   = commaSplit(filterNum(obj.value));
}

function filterNum(str) {
    re      = /^\$|,/g;
    return str.replace(re, "");
}

/**
 * 숫자에 3자리마다 ,를 적용
 * @param x
 * @returns
 */
function numberComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * 콤마제거
 * @param x
 * @returns
 */
function removeComma(x) {
   return x.toString().replace(/(,)/g, "");
}

/**
 * 비밀번호 유효성 검증
 * 
 * @param val
 * @returns
 */
function fnPassNavi(val){
    var nregix  = /[0-9]/g;
    var eregix  = /[a-zA-Z]/ig;
    var gregix  = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    var cregix  = val.length;
    
    $("#pass_nav_n, #pass_nav_e, #pass_nav_g, #pass_nav_c").css("color", "");
    
    if (nregix.test(val)) {
        $("#pass_nav_n").css("text-decoration", "line-through").css("color", "red");
    }
    
    if (eregix.test(val)){
        $("#pass_nav_e").css("text-decoration", "line-through").css("color", "red");
    }
    
    if (gregix.test(val)){
        $("#pass_nav_g").css("text-decoration", "line-through").css("color", "red");
    }
    
    if (cregix >= 8 && cregix <= 20){
        $("#pass_nav_c").css("text-decoration", "line-through").css("color", "red");
    }
}

function leftpad(str){
    str         = str.toString();
    var pad     = "00"
    return pad.substring(0, pad.length - str.length) + str
}

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 핸드폰 인증번호 검증용 아이디 생성
 * 
 * @returns
 */
function getAppId() {
    var d       = new Date();   
    var appId   = (d.getFullYear()+"/"+leftpad(d.getMonth()+1)+"/"+leftpad(d.getDate())+"/"+leftpad(d.getHours())+"/"+leftpad(d.getMinutes())+"/"+leftpad(d.getSeconds())).toString();
    return replaceAll(appId,"/","")+getRandomInt(100,999).toString();
}

/*
 * 핸드폰 인증번호 요청
 * 
 * @param string url    String field url
 * @param string authId input field authId
 * @param string id     input field id
 * @param string pos    인증 구분(position)
 */
function fnAuthByPhone(url, authId, id, pos) {
    
    pos         = (typeof pos !== 'undefined')? pos : 'memberAuth';
    
    if (!isValidate(id, "잘못된 휴대폰 전화번호입니다.", "mobile")) {
        return false;
    };
    
    var authIdx = getAppId();
    $("#"+authId).val(authIdx);
    var data    = {mode : "reqApproval", position : pos, authId : authIdx, tphone : $("#"+ id).val()};
    
    $.post(url,
            data,
            function(data) {
            if (data.result == 'success') {
                $("#phoneAuthMsg").text("* 인증번호 발송되었습니다.");
            } else {
                $("#phoneAuthMsg").text("인증오류입니다. 다시시도 해주세요.");
            }
    }, 'json');
}

/**
 * 소식 받기 
 * @param phone
 * @returns
 */
function fnNewsletter(phone) {
    $.post("/ajax/member.ajax.php", {mode : 'newletter', phone : phone},
    function(data) {
        if (data.result == "success") {
            alert("등록되었습니다.");
			location.reload(true);
        } else {
            var error_txt;
            error_txt       = data.msg.split(":");
            alert(error_txt[1]);
            if (error_txt[0] != "no_txt")
                $("#" + error_txt[0]).focus();
        }
    }, "json");
    return false;
}