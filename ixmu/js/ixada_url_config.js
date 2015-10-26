var ixiada_search_app='http://121.192.190.134:8080/IXiaDaManage/appmanager.do?action=searchAppByKey&&keyword=';

function ixiada_getTieStudentNoUrl(userId,studentNum,studentPassword){
	return 'http://121.192.190.134:8080/IXiaDaManage/usermanager.do?action=bindCustomerStudentNum&&userId='+encodeURIComponent(userId)+'&&studentNum='+encodeURIComponent(studentNum)+'&&studentPassword='+encodeURIComponent(studentPassword);
}

var ixiada_main_pic_url='http://121.192.190.134:8080/IXiaDaManage/appmanager.do?action=getIndexImageService';

var ixiada_upload_img='http://121.192.190.134:8080/IXiaDaManage/usermanager.do?action=addCustomerHeadImage&&userid='+getUserId();
