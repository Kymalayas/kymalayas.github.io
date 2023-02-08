아래 내용은 노트 리파지토리에 다 옮겨 놓았음

# 개요

## 영단어
- maintain : 관리하다
- mutable state : 변경할 수 있는 상태
- single source of truth : 신뢰 가능한 단일출처
- attribute : 기인하다'


## 커맨드 공부

- npm install babel-cli babel-core --save-dev : 바벨 설치(이거 안되네;;;)
- npm install babel-preset-es2015 --save-dev :  JS코드를 ES2015 문법으로 변환해주는 BABEL 플러그인 설치(안되네...)
- npm run babel : 바벨 실행
- node -v : 노드js 버전 확인
- npm -v : npm 버전 확인
- npm init : ?
- npx kill-port 3000 : 사용중인 3000포트를 remove 한다.(명령어를 사용하려면 kill-port를 설치해야 한다.)</br>
<https://happycodingdiary.tistory.com/97>
- netstat : 연결 및 수신대기 포트를 표시합니다.
- npm audit fix --force
- npm audit fix
- npm fund
- npm install chart.js
- npm install react-chartjs-2 chart.js
  <https://velog.io/@treejy/React%EC%97%90%EC%84%9C-Chart.js-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-with-TypeScript>nnmn

## 배포 관련 커맨드
- npm run build : 빌드하기, vscode에 빌드폴더가 생성된다.
- npm install -g serve
- serve -s build : 사용자가 어떤 경로로 들어오든간에 build라는 지정된 폴더의 index.html 파일을 서비스한다.(serve : nodejs로 만들어진 application)
- npx serve -s build (배포 버전보기)
- npx serve 뜻은 한번만 실행시킬 웹서버를 다운받아서 실행시키는 명령어 입니다.
- -s build 뜻은 생성한 build 디렉터리를 문서(Document)루트로 하겠다는 뜻입니다.
- 즉, 한번만 실행시킬 웹서버를 다운받아서 실행시키는데, build 디렉터리를 문서의 루트로 하겠다는 뜻입니다.
- ref : <https://appdevelopmaster.tistory.com/506>




# Ref
- https://developer.mozilla.org/ko/docs/Web/HTML/Element/div


      <header className="App-header">
        <img src={logo}
        className="App-logo"
        alt="logo" />
        <p>
          Edit <code>src/App.js
          </code> and save to reload.
        </p>
        <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

- 비쥬얼 스튜디오 코드 줄바꿈하기
    <https://www.codingfactory.net/12959>

- 크롬 인스펙터 도킹 위치 바꾸기
    <https://jamesdreaming.tistory.com/110>

- 버그 처리 about 'React' must be in scope when using JSX react/react-in-jsx-scope
    <https://velog.io/@mhnormal/React-must-be-in-scope-when-using-JSX-reactreact-in-jsx-scope>


# Serving!
                                                │
   │   Serving!                                       │
   │                                                  │
   │   - Local:    http://localhost:2009              │
   │   - Network:  http://192.168.0.40:2009           │
   │                                                  │
   │   This port was picked because 3000 is in use.   │
   │                                                  │
   │   Copied local address to clipboard!             │
   │                                               
