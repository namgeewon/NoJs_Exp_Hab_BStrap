Nodejs + express + handlebars + bootstrap
======================

# 1. 서버 구성  
## 1.1. AWS Lightsail 서비스 이용 
- Lightsail(https://lightsail.aws.amazon.com) AWS 매니저에서 링크로 이동
- Create an instance(서버 인스턴스 생성) --> Node.js(7.10.0) 생성
- Create a static IP address(IP 활당) -->13.115.40.134 계정 : bitnami
- Account SSH Keys Pairs 설정--> 로컬에 key 다운로드(LightsailDefaultPrivateKey-ap-northeast-1.pem) 
- Networking Firewall 설정 -->  TCP : 3000 추가

![shell 접속](http://13.115.40.134/img/lightsail.png)

## 1.2. 서버 접속 Client
### 1.2.1. Xshell5 사용 
	1. Xshell5으로 public key 로그인 
![shell 접속](http://13.115.40.134/img/shell.PNG)
	
	2. EditPlus 사용을 위해 Pageant 를 사용하여 pem 파일을 ppk 파일로 변환(ftp  고급 설정 sftp , pageant 체크)
![shell 접속](http://13.115.40.134/img/editplus.png)

****
# 2. Express + Handlebars 

## 2.1. Express 설치 

	1. $ npm install express
	2. $ express ExpressDevTest(기본적으로 jade 로 설치됨)
	3. public, routes, views 폴더가 생성되고 package.json, app.js가 생성됨을 확인할 수 있다.
	4. Package.json에 보면 Dependencies에 express와 jade, body-parser, cookie-parser, debug, morgan, 
	   Serve-favicon이 등록되어 있는데 express를 제외한 나머지 모듈은 npm install으로 추가 module 설치 
	   반드시 프로젝트 디렉토리 내에서 설치 실행
           $ npm install

 ## 2.2. Handlebars 설치 

![shell 접속](http://13.115.40.134/img/hb.png)

****
   
# 3. app.js 및 Router 설정 + bootstrap 적용
 
 ## 3.1. app.js 
 
 ![shell 접속](http://13.115.40.134/img/app.png)
 
 ## 3.2. Router 
     1. index.js + main.handlebars + home.handlebars
 ![shell 접속](http://13.115.40.134/img/router.png)
 

 ## 3.3. bootstrap 적용
     
 ### 3.3.1. bootstrap 설치
 ```
	1. npm install bootstrap 
	2. app.js 설정 추가
          -app.use('/static',express.static('public'));
          -app.use('/jquery',express.static(__dirname + '/node_modules/jquery/dist/'));
          -app.use('/bootstrap',express.static(__dirname + '/node_modules/bootstrap/dist/'));
	3.main.handlebars  추가
           -<script src="/jquery/jquery.min.js"></script>
           -<script src="/jquery/jquery.js" charset="utf-8"></script>
           -<script src="/bootstrap/js/bootstrap.js" charset="utf-8"></script>
 ```

**** 
 # 4. 실행 화면
 
 ## 4.1. 서버 실행 
 
	1. npm start  (에러발생시 : npm update)
	2. npm install nodemon -g (nodemon 설치)
	3. package.json   수정("start": "node ./bin/www" ==> "start": "nodemon ./bin/www")
	4. 접속 테스트(http://13.115.40.134:3000) 
	5. npm install forever -g (background run)
	6. forever start -c nodemon bin/www   (home/bitnami/nagee/ExpressDevTest> 수행)
	7. forever stop bin/www
 - 접속 링크(http://13.115.40.134:3000) 
 
  ![shell 접속](http://13.115.40.134/img/run.png)
  
  **** 
 # 5. Test 구현
 
 ## 5.1. URL TEST LINK and Soruce File
 
 - main.handlebars (http://13.115.40.134:3000) 
   - 서버 시간     
   
 - home.handlebars (http://13.115.40.134:3000) 
   - 구글 검색 
   
 - joinForm.handlebars , joinForm.js (http://13.115.40.134:3000/join) 
   - 8자 이상으로 대문자, 소문자, 숫자,특수문자(!@#$%^&+=)가 최소 1개씩 포함 비밀번호 입력 폼 
   
 - ajax.handlebars , ajax.js (http://13.115.40.134:3000/ajax) 
   - 피보나치  수열 값 
   
 ![shell 접속](http://13.115.40.134/img/resultView.png)
