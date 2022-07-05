import { useState } from "react";
interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}
// type UseMutationResult = [(data: any) => void, UseMutationState]; 가 무슨 의미인지 모르겠다. 인자는 any 타입의 data를 받고 리턴은 void를 한다는 말인가? 그렇다면 UseMutationState는 뭐지 
type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [state, setSate] = useState<UseMutationState>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function mutation(data: any) {
    setSate((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((data) => setSate((prev) => ({ ...prev, data })))
      .catch((error) => setSate((prev) => ({ ...prev, error })))
      .finally(() => setSate((prev) => ({ ...prev, loading: false })));
  }
  return [mutation, { ...state }];
}