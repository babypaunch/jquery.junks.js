//반드시 jquery 뒤에 해당 파일을 위치시켜야함.
"use strict";

/*
* $.put, $.delete로 ajax 동작시킬 수 있음. restful api를 쉽게 이용하기 위함.
*/
$.each(["put", "delete"], function(i, method){
	$[method] = function(url, data, callback, type){
		if($.isFunction(data)){
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return $.ajax({url: url, type: method, dataType: type, data: data, success: callback});
	}
});

/*
* input, textarea, select가 readonly나 disabled 상태인데 backspace를 누르면 뒤로가기가 되는 현상을 막기 위한 처리
*/
$(document).on("keydown", function(e){
	if(e.keyCode === 8){ //backspace key
		var $this = $(e.target);
		var status = $this.attr("readonly") !== undefined || $this.attr("disabled") !== undefined;
		if(["INPUT", "TEXTAREA", "SELECT"].indexOf($this.prop("tagName")) !== -1 && status){
			return false;
		}
	}
});

/*
* 문자열의 첫 글자만 대문자로 변경한다.
*/
String.prototype.cap = function(){
	return this.charAt(0).toUpperCase() + this.slice(1);
}

/*
* 문자열에 3자리마다 comma를 추가한다.
*/
String.prototype.comma = function(){
	return this.replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}

/*
* 문자열에서 comma를 제거한다.
*/
String.prototype.strip = function(){
	return this.replace(/[^\d]+/g, "");
}

/*
* 만 나이 14세를 체크함.
* 년월이 같아도 날짜가 지나지 않으면 만14세가 안되는 것으로 처리됨.
* 만 14세 미만 true, 만 14세 이상 false
*/
String.prototype.isCriminalMinor = function(){
	var year = Number(this.substr(0, 4));
	var month = Number(this.substr(4, 2));
	var date = Number(this.substr(6));
	var now = new Date();
	var yyyy = Number(now.getFullYear());
	var mm = Number(now.getMonth() + 1);
	var dd = Number(now.getDate())

	return yyyy - year > 14 ? (yyyy - year === 14 ? (mm < month ? true : (mm === month ? (dd > date ? true : false) : false)) : false) : true;
}
