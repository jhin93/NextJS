import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";


async function handler(req:NextApiRequest, res:NextApiResponse) { // handler 주변에 껍데기를 만듬(withHandler)
    const { phone, email } = req.body // 전화번호 혹은 이메일 둘중 하나를 가짐.
    const payload = phone ? { phone: +phone } : {email} // phone 혹은 email인 상황을 3항연산자로 해결
    // upsert. prisma 메소드
    // upsert는 뭔가 생성하거나 수정할 때 사용한다.
    // .upsert()는 3가지 메소드를 포함한다. create 생성, update 수정, where 검색
    const user = await client.user.upsert({
        where : {
            ...payload,
        },
        create: {
            name: "Anonymous", // 에러 : 'name' 속성이 '{ phone: number; }' 형식에 없지만 'UserCreateInput' 형식에서 필수입니다.
            ...payload,
        },
        update: {} // 이 경우엔 찾아도 update 안할 것이기에 비워둠.
    })
    const token = await client.token.create({
        data: { // index.d.ts의 type TokenCreateInput 에 나와있음. 
            //data -cmd 클릭- TokenCreateInput - UserCreateNestedOneWithoutTokensInput cmd 클릭 - type UserCreateNestedOneWithoutTokensInput
            // UserCreateNestedOneWithoutTokensInput 가 PrismaClient로 모델 연결 가능 - 유저를 생성해 연결하고 싶은 토큰을 명시해야 함. 아니면 그냥 create 하고 존재하는 토큰에 연결
            payload: "1234",
            user: {
                connect: { // 이 토큰을 connect 한다. 12번 줄의 user와
                    id: user.id 
                }
            }
        }
    })
    // if(email){ // 만약 입력된 이메일의 유저를 찾는다면
    //     const user = await client.user.findUnique({ // client로 prisma에 접근
    //         where: {
    //             email,
    //         }
    //     });
    //     if(user) console.log("found it")
    //     if(!user){ // 만약 찾는 유저가 없다면 create user.
    //         console.log("Did not find. Will create")
    //         await client.user.create({ // create 메소드는 다음과 같이 유저를 만든다 
    //             data: { // 유저를 특정지을 수 있는 데이터를 같이 보내줘야 함. 필수로 보내야 하는 name을 보낸다. 전화번호 이메일은 없을수도 있음
    //                 name:"Anonymous",
    //                 email,
    //             }
    //         })
    //     }
    //     console.log(user)
    // }
    return res.status(200).end();
}
// http://localhost:3000/api/client-test에서 확인 가능
// api 라우트를 만드는 방식 : api 폴더 생성 후 파일 생성

// nextJS에서 api route를 만들때는 해당 function을 export default 해야 한다.
export default withHandler("POST", handler) // withHandler를 호출하면, async function(req:NextApiRequest, res:NextApiResponse) {...} 가 리턴된다.
// http://localhost:3000/api/users/enter에 들어가면, get 요청이기 때문에 위 문장의 POST 요청과 맞지 않게 되어 withHandler.ts 의 res.status(405).end();에 걸린다.



