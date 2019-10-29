# Hyperledger-study-42

하이퍼레져 앱 만들기 실습 42일차 - Awair의 정보 가져오기

A. api 받기

1) https://developer.getawair.com/console/access-token 접속

2) 회원가입 및 로그인하여 인증받기

3) token 

B. 필요한 정보 획득 방법

1) 사용중인 device 정보 얻기

        var http = require('http');

        var options = {
          'method': 'GET',
          'hostname': 'developer-apis.awair.is',
          'path': '/v1/users/self/devices',
          'headers': {
            'Authorization': 'Bearer example-token'
          }
        };

        var req = http.request(options, function (res) {
          var chunks = [];

          res.on("data", function (chunk) {
            chunks.push(chunk);
          });

          res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
          });

          res.on("error", function (error) {
            console.error(error);
          });
        });

        req.end();

2) airdata 불러오기

        var https = require('https');

        var options = {
          'method': 'GET',
          'hostname': 'developer-apis.awair.is',
          'path': '/v1/users/self/devices/{{device_type}}/{{device_id}}/air-data/latest?fahrenheit=false',
          'headers': {
            'Authorization': 'Bearer example-token'
          }
        };

        var req = https.request(options, function (res) {
          var chunks = [];

          res.on("data", function (chunk) {
            chunks.push(chunk);
          });

          res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
          });

          res.on("error", function (error) {
            console.error(error);
          });
        });

        req.end();
