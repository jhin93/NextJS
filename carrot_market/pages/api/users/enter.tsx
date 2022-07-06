import mail from "@sendgrid/mail";
import twilio from "twilio";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

mail.setApiKey(process.env.SENDGRID_KEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
  ) {
    const { phone, email } = req.body;
    const user = phone ? { phone } : email ? { email } : null; // 2중 3항 연산자. 폰 먼저 체크하고, 없으면 이메일 체크, 이메일도 없으면 null
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
    if (phone) {
      /* const message = await twilioClient.messages.create({
        messagingServiceSid: process.env.TWILIO_MSID,
        to: process.env.MY_PHONE!,
        body: `Your login token is ${payload}.`,
      });
      console.log(message); */
    } else if (email) {
      /* const email = await mail.send({
        from: "jhin@clo3d.com",
        to: "jhin@clo3d.com",
        subject: "Your Carrot Market Verification Email",
        text: `Your token is ${payload}`,
        html: `<strong>Your token is ${payload}</strong>`,
      });
      console.log(email); */
    }
    return res.json({
      ok: true,
    });
}


export default withHandler({ method: "POST", handler, isPrivate: false });