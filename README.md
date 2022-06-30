# NextJS

NextJS를 공부하기 위한 공간입니다.

에러 : Conflicting peer dependency:
원인 : 노마드 코더의 코드를 풀받고 npm install 하니까 install에 실패하면서 나타난 문구
설명 : https://yceffort.kr/2021/10/debt-of-package-json
해결 : npm install --force 실행. 혼자 공부하니까 한 것. 일 할때는 무조건 지양


에러 : Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './lib/tokenize' is not defined by "exports" in ~~/package.json
설명 : https://bcp0109.tistory.com/347
해결 : nodejs의 높은 버전으로 설치가 안될 때가 있다. 그때는 nvm use 낮은 버전으로 버전 바꾸고 npm install 시도할 것.
