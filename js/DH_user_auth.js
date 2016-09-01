//jsファイルになってますがajaxです。htmlファイルのscriptタグ内で実行を確認しました。
//ユーザー認証
$.ajax({
  type: 'POST',
  url: 'https://iot-device.jp-east-1.api.cloud.nifty.com/auth/user',
  data: {"projectId": "",
	  "appId" : "",
	  "email" : "",
	  "password" : ""
  }
}).then(function(response){
  console.log(response)
})

