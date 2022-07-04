import { useState } from 'react';

// useMutation hook의 첫번째 item으로 function(enter)을 리턴한다.
// object도 리턴하고 있다. loading(boolean), data(any), error(any)
export default function useMutation(url: string): [(data:any) => void, {loading:boolean; data: undefined|any; error: undefined|any}]{ // return 형태는 함수 & 객체이다.
    // object({loading, data, error})에 들어갈 3가지 상태
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<undefined | any>(undefined);
    const [error, setError] = useState<undefined | any>(undefined);
    function mutation (data?:any) { // 이 함수는 백엔드로 보낸 data를 받게 된다. enter.tsx의 enter(data)
        
    }
    return [mutation, {loading, data, error}] // mutation 함수(error), object({loading, data, error}) 이 두가지를 리턴한다.
}


