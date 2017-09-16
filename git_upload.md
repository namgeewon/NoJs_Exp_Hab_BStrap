github Upload
======================

 
Github 개인 정보 등록

$ sudo git config --global user.name "본인 계정 입력"

$ sudo git config --global user.email "본인 메일 주소 입력"

$ sudo git config --global color.ui "auto"

```
github 저장소 복제

$ sudo git clone https://github.com/namgeewon/NoJs_Exp_Hab_BStrap.git

```
원격 저장소 등록

$ sudo git remote add origin https://github.com/namgeewon/NoJs_Exp_Hab_BStrap.git

$ sudo git fetch origin

```
변경된 모든 파일 추가 (커밋 전에 필수 실행)

$ sudo git add -A

# 아래의 명령어를 입력후 엔터 치고 변경목록이 보이면 Ctrl+o 그리고 엔터 그리고 Ctrl+x 종료한다.


$ sudo git commit
```
커밋 메세지를 입력 (하지 않으면 안됨)

$ sudo git commit -m "메세지입력"

```
저장소에 올리기 (계정과 암호 물어보면 입력)

$ git push origin master

$ git pull (github --> local =svn update)


