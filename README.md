# jquery.junky.js #
* jquery의 유명한 플러그인들을 제외하고 쓸만한 내용만 모아서 사용할 수 있도록 인터넷에 떠도는 자료들을 모아둔 것.
* 라이센스 따위 없음. 마음대로 쓰시고 좋은 의견은 남겨주시면 더 좋구요.  

## Install js file ##
<div>1. jquery에 종속적인 내용만 다루므로 반드시 jquery 파일의 아래에 jquery.junky.js 파일을 위치시켜야 한다.</div>
<br/>
<div>2. 별도의 전역변수를 사용할 필요 없으며, 추가로 전역변수를 사용하고자 하는 경우엔 사용자 선택에 따라 변경해서 사용하면 된다.</div>

## Usage ##

### 1. $.put(), $.delete() 사용하기 ###
* jquery에는 $.ajax()의 간편 버전인 $.get(), $.post()가 존재한다.
* http(s)로 jquery를 이용해 REST API같이 사용하고자 할때 put, delete가 없어서 직접 $.ajax()를 이용하여 추가함.
* 물론 서버에서 다음과 같이 처리할 준비가 되어 있어야 정상동작됨.

<pre>
//Create
$.post(url, json, function(data){  
	console.log(data);  
});
</pre>

<pre>
//Read
$.get(url, json, function(data){  
	console.log(data);  
});
</pre>

<pre>
//Update added
$.update(url, json, function(data){  
	console.log(data);  
});
</pre>

<pre>
//Delete added
$.delete(url, json, function(data){  
	console.log(data);  
});
</pre>

### 2. input/textarea/select가 readonly/disabled 일때 backspace에 의한 뒤로가기 막기 ###
<pre>
$(document).on("keydown", function(e){
	if(e.keyCode === 8){ //backspace key
		var $this = $(e.target);
		var status = $this.attr("readonly") !== undefined || $this.attr("disabled") !== undefined;
		if(["INPUT", "TEXTAREA", "SELECT"].indexOf($this.prop("tagName")) !== -1 && status){
			return false;
		}
	}
});
</pre>