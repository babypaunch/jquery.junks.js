# jquery.junks.js #
* jquery의 유명한 플러그인들을 제외하고 쓸만한 내용만 모아서 사용할 수 있도록 인터넷에 떠도는 자료들을 모아둔 것.
* 라이센스 따위 없음. 마음대로 쓰시고 좋은 의견은 남겨주시면 더 좋구요.  

## Install js file ##
<div>1. jquery에 종속적인 내용만 다루므로 반드시 jquery 파일의 아래에 jquery.junks.js 파일을 위치시켜야 한다.</div>
<br/>
<div>2. 전역변수 $J는 사용자 선택에 따라 변경해서 사용하면 된다.</div>

## Usage ##

### 1. $.put(), $.delete() 사용하기 ###
* jquery에는 $.ajax()의 간편 버전인 $.get(), $.post()가 존재한다.
* http(s)로 jquery를 이용해 REST API같이 사용하고자 할때 put, delete가 없어서 직접 $.ajax()를 이용하여 추가함.
* 물론 서버에서 다음과 같이 처리할 준비가 되어 있어야 정상동작됨.

<table>
	<tr>
		<th style="vertical-align: middle;">Create</th>
		<td>
<pre style="background-color: transparent; margin-bottom: 0;">$.post(url, json, function(data){  
	console.log(data);  
});</pre>
		</td>
	</tr>
	<tr>
		<th style="vertical-align: middle;">Read</th>
		<td>
<pre style="background-color: transparent; margin-bottom: 0;">$.get(url, json, function(data){  
	console.log(data);  
});</pre>
		</td>
	</tr>
	<tr>
		<th style="vertical-align: middle;">Update</th>
		<td>
<pre style="background-color: transparent; margin-bottom: 0;">$.put(url, json, function(data){  
	console.log(data);  
});</pre>
		</td>
	</tr>
	<tr>
		<th style="vertical-align: middle;">Delete</th>
		<td>
<pre style="background-color: transparent; margin-bottom: 0;">$.delete(url, json, function(data){  
	console.log(data);  
});</pre>
		</td>
	</tr>
</table>
