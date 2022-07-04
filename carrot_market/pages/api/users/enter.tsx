import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";


export default async function handler(
    req:NextApiRequest, 
    res:NextApiResponse
) {
    if(req.method !== "POST") {
        res.send(401)
    }
    console.log(req.body)
    res.send(200)
}

// http://localhost:3000/api/client-test에서 확인 가능
// api 라우트를 만드는 방식 : api 폴더 생성 후 파일 생성