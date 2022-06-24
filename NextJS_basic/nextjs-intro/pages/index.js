import { useRouter } from "next/router";
import Link from "next/link";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, person) => {
    router.push(`/billionare/${person}/${id}`);
  };
  console.log("------------results -------------", results);
  return <div>test22</div>;
}

export async function getServerSideProps() {
  const results = await fetch(`https://billions-api.nomadcoders.workers.dev/`);

  return {
    props: {
      results
    }
  };
}
