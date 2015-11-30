window.onload = function(){
	var xiao = document.getElementsByClassName('xiao');
	var time1 = document.getElementById('time');
	
	for(var i=0;i<xiao.length;i++){
		var row = 65 + Math.floor(Math.random()*(122-65));
		while( row >= 91  && row <= 96){
			row = 65 + Math.floor(Math.random()*(122-65));
		}
		xiao[i].innerHTML = String.fromCharCode(row);
	}
	var time = 0,hasjishu = false,timerId;
	//覆盖模式
	var top = da.firstElementChild;
	document.onkeydown = function(e){
		if(e.shiftKey){
			if(e.keyCode !== top.innerHTML.charCodeAt(0)) return;
		}else{
			if(e.keyCode + 32 !== top.innerHTML.charCodeAt(0)) return;
		}
		if(!hasjishu){
			timerId = setInterval(function(){
				time++;
				time1.innerHTML = time;
			},1000);
			hasjishu = true;
		}
		top.style.background = '#ffd465';
		top.style.color= 'black';
		top.style.boxShadow= '0px -4px 4px #bf9e0a inset';
		top = top.nextElementSibling;
		if(top == null){
			clearInterval(timerId);
			alert(time);
			location.reload();
		}
	}
document.onmousedown = function(e){
	e.preventDefault(e);
}
	
};