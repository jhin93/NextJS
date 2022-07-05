import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";


async function handler(req:NextApiRequest, res:NextApiResponse) { // handler 주변에 껍데기를 만듬(withHandler)
    const { phone, email } = req.body // 전화번호 혹은 이메일 둘중 하나를 가짐.
    const user = phone ? { phone: +phone } : { email };
    const payload = Math.floor(100000 + Math.random() * 900000) + "";
    const token = await client.token.create({
      data: {
        payload,
        user: {
          connectOrCreate: { // 찾지 못하면 생성해줌.
            where: {
              ...user,
            },
            create: { // where에서 찾는 유저가 없다면, 여기서 create
              name: "Anonymous",
              ...user,
            },
          },
        },
      },
    });
    console.log(token);
    return res.status(200).end();
}
// http://localhost:3000/api/client-test에서 확인 가능
// api 라우트를 만드는 방식 : api 폴더 생성 후 파일 생성

// nextJS에서 api route를 만들때는 해당 function을 export default 해야 한다.
export default withHandler("POST", handler) // withHandler를 호출하면, async function(req:NextApiRequest, res:NextApiResponse) {...} 가 리턴된다.
// http://localhost:3000/api/users/enter에 들어가면, get 요청이기 때문에 위 문장의 POST 요청과 맞지 않게 되어 withHandler.ts 의 res.status(405).end();에 걸린다.



