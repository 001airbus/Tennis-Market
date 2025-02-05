# Tennis-Market
## programmers Project

### about
- node.js로 만든 서버와 mysql로 만든 db를 연동하는 간단한 테니스 상점입니다.


### needs to be fixed
- Node.js 서버 실행시 main.html 파일에서 main.css가 적용이 안되는 것
- VCS에서는 order list 링크 클릭시 orderlist.html로 이동되지만 Node.js 서버에서 main.html에서 같은 동작시 404로 빠지는 것


### try
- CSS의 오류의 경우 ~.css가 정적인 파일이기 때문이기에, server.js에서 let http = require('http')인 http 모듈대신 express모듈로 대체하고 main.css파일을 public파일에 넣고 부르는 식으로 한다는데, 관련해서 개념이 부족하여 해당파트를 좀 더 공부하고 개념이 정리 후 다시 시도해볼 예정.
  
- orderlist.html의 404 오류는 index.js가 server.js를 부르고 server.js는 request를 받아 router.js로 pathname, handle, response, queryData.productId를 보내고 router.js는 서버로 부터 받은 pathname의 타입이 함수인지를 확인후 404 or requestHandler.js로 넘기니까 이쪽에서 문제가 있다는 걸 알수있었는데. 
  아니면 requestHandler.js의 handle['/orderlist'] = orderlist; 이 부분을 잘못했는지 const order_view = fs.readFileSync('./orderlist.html', 'utf-8'); 이게 문제인지. 각각의 실행내용과 순서에 대해 보충필요.
---
### solve, etc
1. 도커 설치 후 실행안됨 : 도커는 WSL2(Windows Subsystem for Linux 2)를 사용. WSL2가 설치 되어 있지 않으면 사용못함.

  해결방법 : powershell을 관리자 권한으로 실행후 `wsl --list --verbose`실행해서 wsl가 있는지 확인하고, 없다면 `wsl --install`로 설치

2. 위의 1방법 시도중 "WSL2는 현재 컴퓨터 구성에서 지원되지 않습니다..\r\n\"가상 머신 플랫폼\" 선택적 구성 요소를 사용하도록 설정하고 BIOS에서 가상화가 사용하도록 설정되어 있는지 확인하세요."

  해결방법 : BIOS 세팅에서 VT(인텔) SVM(AMD)옵션 활성화 해주어야함.

3. mysql 설치했는데 'mysql'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.

  해결방법 : 컴퓨터 - 우클릭 -속성 -고급시스템설정 or window key + pausebreak - 고급시스템설정 - 고급 - 환경변수 - path - 편집 - 경로입력 //경로는 mysql설치한 경로

4. VSC에서 `npm install mysql --save`가 보안상의 이유로 안되는 경우

  해결방법 : powershell을 관리자 권한으로 실행시킨 후 `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` 입력
