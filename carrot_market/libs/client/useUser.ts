import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function useUser() {
  const { data, error } = useSWR("/api/users/me", fetcher); // swr은 2개의 인자를 받는다. 요청을 받는 인자, fetcher 함수.
  const router = useRouter();

  //         return router.replace("/enter");

  return data;

}