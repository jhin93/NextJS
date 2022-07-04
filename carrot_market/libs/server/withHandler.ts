import { NextApiRequest, NextApiResponse } from 'next';


// enter.tsx에서 사용하는 방식에 따라 첫번째 인자는 http 메소드
// 두번째 인자는 실행해야 할 function. 인자로 enter.tsx의 handler함수의 인자들을 받고, void를 리턴하는 함수를 받는다.
export default function withHandler(
    method: "GET" | "POST" | "DELETE", 
    fn: (req:NextApiRequest, res:NextApiResponse) => void
) {
    // nextJS에서 api route를 만들때는 해당 function을 export default 해야 한다.
    // enter.tsx에서 삭제한 handler 함수를 리턴해야 하고, 그러려면 아래와 같이(handler 함수의 인자도 포함해서) 작성해야 한다.
    return async function(req:NextApiRequest, res:NextApiResponse) {
        if(req.method !== method){ // req.method(들어온 method)가 우리가 원한 method(인자의 method 중 하나)가 아니라면
            res.status(405).end(); // bad request(405) 출력.
            return;
        }
        try {
            await fn(req, res)
        }   catch (error) {
            console.log(error);
            return res.status(500).json({ error })
        }
    }
}






