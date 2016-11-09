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
