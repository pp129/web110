//获取某个模块数据刷新时间
function getRefreshTime(id,name) {
	var refreshTime=30*1000;
		$.ajax({
			type: "post",
			url: "../warning/getRefreshTime.do",
			dataType: 'json',
			async: false,
			data: {
				id: id,
				name: name,
			},
			success: function(data) {
				refreshTime=data*1000;
			}
		});
		return refreshTime;
	}	

//登录校验
function checkLogin(){	
	$('#content').css('display','none');
	if(!window.localStorage){
		alert('请选择google浏览器最新版');
    }else{
    	var uersName=localStorage.getItem("uersName");
    	var password=localStorage.getItem("password"); 	
    	var verifyAdmin=localStorage.getItem("verifyAdmin");
    	var verifySet=localStorage.getItem("verifyNotSet");
    	//var verifyHL=localStorage.getItem("verifyHL");
    	//var verifySM=localStorage.getItem("verifySM");
    	//var verifyJM=localStorage.getItem("verifyJM");
    	var verifyCache=uersName+password;
    	console.log(uersName+'-'+password+'-'+localStorage.getItem("verifyCache"));
    	if(verifyAdmin || verifySet){
    		console.log("localStorage校验存在");
    		$('#content').css('display','block');
    	}else{
    		$('#content').css('display','none');
    		$('#loginModal').modal('show');
    	}
    }
}

//校验失败点击返回至市局登录界面
function turnBack(){
	$('#loginModal').modal('hide');	
	//返回至市局登录页面，无缓存时至本分局登录页面
	if(localStorage.getItem('loginUrl')){
		window.location.href=localStorage.getItem('loginUrl');
	}else{
		window.location.href=".";
	}
}

//点击退出系统，清除用户名缓存
function closeWindow() {
	window.location.href = 'http://10.130.149.130:8899/dsj/';          
    localStorage.clear();
}