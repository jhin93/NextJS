import { useRouter } from "next/router";

export default function BillionairePerson({ results }) {
  const router = useRouter();
  console.log(" ---- results ---- :", results);
  return (
    <div>
      <img alt="billionaire" src={`${results.squareImage}`} />
      <h4>{`${results.name}`}</h4>
      <div>{`${Math.round(results.netWorth / 1000)} Billion`}</div>
      <div>{`${results.country}`}</div>
      <div>{`${results.industries[0]}`}</div>
      <div>{`${results.bio}`}</div>
      <div className="financialAssets">
        Financial Assets
        {/* {`${results.financialAssets[0].ticker}`}
        {`${results.financialAssets[0].numberOfShares}`} */}
        {`${results.financialAssets.map((ele) => (
          <div>{`${ele.ticker}`}</div>
        ))}`}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const results = await (
    await fetch(
      `https://billions-api.nomadcoders.workers.dev/person/${params[0]}`
    )
  ).json();
  // console.log(" ---- results ---- :", results);
  return {
    props: {
      results
    }
  };
}
