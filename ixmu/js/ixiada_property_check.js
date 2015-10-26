function phone_blur(){
    var phone = document.getElementById("phone").value;
    if (/^\s*$/.test(phone)) {
        document.getElementById("phone_check").style.backgroundImage = "url(css/img/error.png)";
        document.getElementById("warn").innerHTML = "账号不能为空！";
        return true;
    }
    for (var i = 0; i < phone.length; i++) {
        var text = phone.charAt(i);
        if (!(text <= 9 && text >= 0)) {
            document.getElementById("phone_check").style.backgroundImage = "url(css/img/error.png)";
            document.getElementById("warn").innerHTML = "账号只能为数字！";
            return true;
        }
    }
    document.getElementById("phone_check").style.backgroundImage = "url(css/img/tick.png)";
    document.getElementById("warn").innerHTML = "";
    return false;
}

function password_blur(){
    var password = document.getElementById("password").value;
    if (/^\s*$/.test(password)) {
        document.getElementById("password_check").style.backgroundImage = "url(css/img/error.png)";
        document.getElementById("warn").innerHTML = "请输入密码！";
        return true;
    }
    if (password.length < 6 || password.length > 20) {
        document.getElementById("password_check").style.backgroundImage = "url(css/img/error.png)";
        document.getElementById("warn").innerHTML = "密码长度不符合要求！";
        return true;
    }
    document.getElementById("password_check").style.backgroundImage = "url(css/img/tick.png)";
    document.getElementById("warn").innerHTML = "";
    return false;
}

function password2_blur(){
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    if (password1 != password2) {
		document.getElementById("password2_check").style.backgroundImage = "url(css/img/error.png)";
        document.getElementById("warn").innerHTML ="密码不一致！";
        return true;
    }
	document.getElementById("password2_check").style.backgroundImage = "url(css/img/tick.png)";
    document.getElementById("warn").innerHTML ="";
    return false;
}

function username_blur() {
	if(/^\s*$/.test(document.getElementById("username").value)) {
		document.getElementById("username_check").style.backgroundImage = "url(css/img/error.png)";
		document.getElementById("warn").innerHTML ="请填写昵称";
		return true;
	}
	document.getElementById("username_check").style.backgroundImage = "url(css/img/tick.png)";
	document.getElementById("warn").innerHTML ="";
	return false;
}
