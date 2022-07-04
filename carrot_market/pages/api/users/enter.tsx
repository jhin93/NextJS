import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";


async function handler(req:NextApiRequest, res:NextApiResponse) {
    console.log(req.body);
    res.status(200).end();
}
// http://localhost:3000/api/client-test에서 확인 가능
// api 라우트를 만드는 방식 : api 폴더 생성 후 파일 생성

// nextJS에서 api route를 만들때는 해당 function을 export default 해야 한다.
export default withHandler("POST", handler) // withHandler를 호출하면, async function(req:NextApiRequest, res:NextApiResponse) {...} 가 리턴된다.









