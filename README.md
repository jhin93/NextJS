# NextJS

NextJS를 공부하기 위한 공간입니다.

에러 : Conflicting peer dependency:
원인 : 노마드 코더의 코드를 풀받고 npm install 하니까 install에 실패하면서 나타난 문구
설명 : https://yceffort.kr/2021/10/debt-of-package-json
해결 : npm install --force 실행. 혼자 공부하니까 한 것. 일 할때는 무조건 지양


에러 : Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './lib/tokenize' is not defined by "exports" in ~~/package.json
설명 : https://bcp0109.tistory.com/347
해결 : nodejs의 높은 버전으로 설치가 안될 때가 있다. 그때는 nvm use 낮은 버전으로 버전 바꾸고 npm install 시도할 것.


Prisma
불러오기 : npx prisma (+init)

## PlanetScale CLI

mac

`brew install planetscale/tap/pscale`

`brew install mysql-client`

`pscale auth login`

`pscale region list`

`pscale database create carrot-market --region ap-northeast`

carrot-market: databse name

ap-northeast: region list의 slug 사용

admin pannel에서도 동일하게 생성이 가능

보안 터널을 통해 PlanetScale과 컴퓨터를 연결할 수 있다

`pscale connect carrot-market`

pscale 에서 제공하는 URL을 데이터베이스에 연결

`DATABASE_URL="mysql://127.0.0.1:3306/carrot-market"`