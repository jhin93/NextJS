import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
  ) {
    const { phone, email } = req.body;
    const user = phone ? { phone: +phone } : email ? { email } : null; // 2중 3항 연산자. 폰 먼저 체크하고, 없으면 이메일 체크, 이메일도 없으면 null
    if (!user) return res.status(400).json({ ok: false }); // user가 null일때 400 에러
    const payload = Math.floor(100000 + Math.random() * 900000) + "";
    const token = await client.token.create({
      data: {
        payload,
        user: {
          connectOrCreate: {
            where: {
              ...user,
            },
            create: {
              name: "Anonymous",
              ...user,
            },
          },
        },
      },
    });
    return res.json({
      ok: true,
    });
}

export default withHandler("POST", handler);