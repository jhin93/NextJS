import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({ results }) {
  // API 데이터 콘솔 확인
  console.log("------------results -------------", results);

  const router = useRouter();
  const onClick = (id) => {
    router.push(`/person/${id}`);
  };
  // 반올림 함수

  return (
    <div className="container">
      {results?.map((person) => (
        <div
          onClick={() => onClick(person.id, person.name)}
          className="billionaire"
          key={person.id}
        >
          <img alt="billionaire" src={`${person.squareImage}`} />
          <h4>
            <Link href={`/person/${person.id}/${person.name}`}>
              {`${person.name}`}
            </Link>
          </h4>
          <p>{`${Math.round(person.netWorth / 1000)} Billion / ${
            person.industries[0]
          }`}</p>
        </div>
      ))}
      {/* style */}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          margin: -10px;
          padding: 20px 40px;
          gap: 20px;
          background-color: #0f181c;
        }
        .billionaire {
          cursor: pointer;
        }
        .billionaire img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .billionaire:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .billionaire h4 {
          color: white;
          font-size: 14px;
          text-align: left;
        }
        .billionaire p {
          color: white;
          font-size: 10px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const results = await (
    await fetch(`https://billions-api.nomadcoders.workers.dev/`)
  ).json();
  return {
    props: {
      results
    }
  };
}
