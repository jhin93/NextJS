import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";


async function handler(req:NextApiRequest, res:NextApiResponse) { // handler 주변에 껍데기를 만듬(withHandler)
    const { phone, email } = req.body // 전화번호 혹은 이메일 둘중 하나를 가짐.
    let user;
    if(email){ // 만약 입력된 이메일의 유저를 찾는다면
        const user = await client.user.findUnique({ // client로 prisma에 접근
            where: {
                email,
            }
        });
        if(user) console.log("found it")
        if(!user){ // 만약 찾는 유저가 없다면 create user.
            console.log("Did not find. Will create")
            await client.user.create({ // create 메소드는 다음과 같이 유저를 만든다 
                data: { // 유저를 특정지을 수 있는 데이터를 같이 보내줘야 함. 필수로 보내야 하는 name을 보낸다. 전화번호 이메일은 없을수도 있음
                    name:"Anonymous",
                    email,
                }
            })
        }
        console.log(user)
    }
    return res.status(200).end();
}
// http://localhost:3000/api/client-test에서 확인 가능
// api 라우트를 만드는 방식 : api 폴더 생성 후 파일 생성

// nextJS에서 api route를 만들때는 해당 function을 export default 해야 한다.
export default withHandler("POST", handler) // withHandler를 호출하면, async function(req:NextApiRequest, res:NextApiResponse) {...} 가 리턴된다.
// http://localhost:3000/api/users/enter에 들어가면, get 요청이기 때문에 위 문장의 POST 요청과 맞지 않게 되어 withHandler.ts 의 res.status(405).end();에 걸린다.



