import { useState } from "react";
interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}
// UseMutationResult는 배열이고, 0번째 인덱스에 함수, 1번째 인덱스에 인터페이스를 담는 형태이다.
type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

  export default function useMutation<T = any>(
    url: string
  ): UseMutationResult<T> {
  const [state, setSate] = useState<UseMutationState<T>>({
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