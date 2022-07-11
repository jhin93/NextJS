import React from "react";
import useSWR from "swr";

export default () => {
  const { data, mutate } = useSWR("https://dogs-api.nomadcoders.workers.dev");
  const onNewClick = () => {
    mutate();
  };
  const onLikeClick = () => {
    mutate({ ...data, isLiked: !data.isLiked }, { revalidate: false });
  };
  return (
    <main className="container">
      <header>
        <h1>Woof.tv</h1>
      </header>
      <article>
        {data?.url ? (
          <div className="wrapper">
            <video
              src={data.url}
              width="400"
              height="400"
              loop
              controls
              autoPlay
            ></video>
            <div>
              <button className="contrast" onClick={onNewClick}>
                New Dog!
              </button>
              <button onClick={onLikeClick}>
                {data?.isLiked ? "Unlike" : "Like"}
              </button>
            </div>
          </div>
        ) : null}
      </article>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          overflow: hidden;
        }
        .wrapper div {
          margin-top: 10px;
          display: flex;
          gap: 10px;
          width: 100%;
        }
      `}</style>
    </main>
  );
};
