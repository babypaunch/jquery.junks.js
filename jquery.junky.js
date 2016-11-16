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

var $J = {
	/*
	* 문서 내에서 z-index가 가장 높은 값 + 1을 반환
	*/
	lastIndex: function(){
		var result = 0;

		$("*").each(function(){
			var zIndex = $(this).css("z-index") === "auto" ? 1 : parseInt($(this).css('z-index'));
			if(zIndex > result){
				result = zIndex;
			}
		});

		return result + 1;
	} //end: lastIndex: function(){

	/*
	* 배열내 json객체를 지정된 key명으로 정/역방향 정렬한다.
	*/
	, sort: function(arr, key, order){
		return arr.sort(function(a, b){
			return ["desc", "dsc"].indexOf(order) === -1 ? (a[key] < b[key] ? - 1 : a[key] > b[key] ? 1 : 0) : (a[key] > b[key] ? - 1 : a[key] < b[key] ? 1 : 0);
		});
	} //end: , sort: function(arr, key, order){

	/*
	* json 객체를 arr에 해당하는 요소를 제외하고 return한다.
	*/
	, excepts: function(json, arr){
		for(var key in json){
			if(arr.indexOf(key) !== -1){
				delete json[key];
			}
		}
		return json;
	} //end: , excepts: function(json, arr){

	/*
	* url/map 패턴의 문자열을 json형태로 parsing한다.
	* separator는 첫번째 구분자
	* decouple은 key와 value로 나눌 구분자
	* 첫번째 물음표, 모든 {(left brace), }(right brace) 기호는 제거된다.
	*/
	, jsonize: function(obj, separator, decouple){
		var json = {};

		var arr = $.trim(obj).replace(/^[\?]/, "").replace(/{/gi, "").replace(/}/gi, "").split(separator || ",");
		for(var i = 0; i < arr.length; i++){
			var pair = arr[i].split(decouple || "=");
			if(pair.length === 2 && $.trim(pair[0]) !== ""){
				json[$.trim(pair[0])] = $.trim(pair[1]);
			}
		}

		return json;
	} //end: , jsonize: function(obj, separator, decouple){
}; //end: var $J = {
