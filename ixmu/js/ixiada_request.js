//url得到的json处理后放入名为name的div中,有缓存
function loadIndexApp(url, templ, name){
    uexWindow.toast("1", "5", "加载中，请稍等...", "0");
    $.getJSON(url, function(data){
    
        inputIndexApp(data, templ, name);
    }, "json", function(e){
    
        alert('加载失败，请查看您的网络连接');
    }, 'POST', '', true);
    
}

function loadAppWithoutCache(url, templ, name){
    uexWindow.toast("1", "5", "加载中，请稍等...", "0");
    $.getJSON(url, function(data){
        inputIndexApp(data, templ, name);
    }, "json", function(e){
    
        alert('加载失败，请查看您的网络连接');
    }, 'POST', '', false);
    
}

function inputIndexApp(data, templ, name){
    document.getElementById(name).innerHTML = "";
    for (var v in data) {
        var s = zy_tmpl_s(templ, data[v], function(a, b){
        });
        $$(name).innerHTML = $$(name).innerHTML + s;
        zy_imgcache('image' + data[v].iconpath, data[v].iconpath, data[v].iconpath, function(domobject, url){
        
        }, null);
    }
    uexWindow.closeToast();
}

function ixiada_refresh(url, templ, name){
    $.clearLS(url);
    loadIndexApp(url, templ, name);
    
}

//打开一个链接页面
function go(d, name){

    uexWindow.open("app", 0, "onlyHeaders.html", 2, "", "", 1, 0);
    var storage = window.localStorage;
    storage.setItem("title", name);
    if (d.indexOf('html') != d.length - 4) {
        d = addStudentNo(d, getStudentNo());
    }
    storage.setItem("url", d);

    
}

function addStudentNo(url, studentNo){
    if (url.indexOf('?') > 0) 
        return url + '&&xmu_user_name=' + studentNo;
    else {
        return url + '?xmu_user_name=' + studentNo;
    }
    
}

//登陸
function ixiada_login(username, password){

    var url = 'http://121.192.190.134:8080/IXiaDaManage/usermanager.do?action=customerLogin&&phonenumber=' + username + '&&password=' + password;
    $.getJSON(url, function(data){
        if (data.result != 'false') {
            info('登陆成功');
            window.localStorage.setItem('user', data);
            window.localStorage.setItem('ixiada_user_id', data.id);
            window.localStorage.setItem('ixiada_user_libpassword', data.libpassword);
            window.localStorage.setItem('ixiada_user_nickname', data.nickname);
            window.localStorage.setItem('ixiada_user_phonenumber', data.phonenumber);
            window.localStorage.setItem('ixiada_user_studentnum', data.studentnum);
            window.localStorage.setItem('ixiada_user_headimage', data.headimage);
        }
        else {
            info('账号或密码错误');
        }
    });
    
}

function getHeadImage(){
    return window.localStorage.getItem('ixiada_user_headimage');
}

function info(data){
    alert(data);
}

//检测是否登陆
function ifLogin(){
    var storage = window.localStorage;
    if (storage.getItem('user') == null || storage.getItem('user') == 'error') {
        return false;
    }
    return storage.getItem('user');
}

function getNickName(){
    var storage = window.localStorage;
    return storage.getItem('ixiada_user_nickname');
}

function getUserId(){
    var storage = window.localStorage;
    return storage.getItem('ixiada_user_id');
}

function getStudentNo(){
    var storage = window.localStorage;
    return storage.getItem('ixiada_user_studentnum');
}

//退出登錄 
function ixiada_quitLogin(){
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('ixiada_user_id');
    window.localStorage.removeItem('ixiada_user_libpassword');
    window.localStorage.removeItem('ixiada_user_nickname');
    window.localStorage.removeItem('ixiada_user_phonenumber');
    window.localStorage.removeItem('ixiada_user_studentnum');
	 window.localStorage.removeItem('ixiada_user_headimage');
}


function updateUser(){
    var url = 'http://121.192.190.134:8080/IXiaDaManage/usermanager.do?action=getCustomerInfo&&userId=' + getUserId();
    $.getJSON(url, function(data){
        window.localStorage.setItem('user', data);
        window.localStorage.setItem('ixiada_user_id', data.id);
        window.localStorage.setItem('ixiada_user_libpassword', data.libpassword);
        window.localStorage.setItem('ixiada_user_nickname', data.nickname);
        window.localStorage.setItem('ixiada_user_phonenumber', data.phonenumber);
        window.localStorage.setItem('ixiada_user_studentnum', data.studentnum);
		window.localStorage.setItem('ixiada_user_headimage', data.headimage);
    }, "json", function(e){
    
        alert('加载失败，请查看您的网络连接');
    }, 'POST', '', false);
}

function setStudentNo(studentNo){
    var storage = window.localStorage;
    storage.setItem('ixiada_user_studentnum', studentNo);
}









