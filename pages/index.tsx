import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Card from "../components/CharacterName/Character";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import { useDadJokeState } from "../context/state";
import useActivePage from "../hooks/pagination/useActivePage";
import useCharacters from "../hooks/pagination/useCharacters";
import fillArray from "../utils/fillArray";

import styles from "./styles/index.module.scss";

export default function Home({ inital }) {
  const router = useRouter();

  const [activePage, setActivePage] = useState(Number(router.query.page));
  const [viewed, setViewed] = useState([]);

  const { state } = useDadJokeState();
  const { isLoading, characters } = state;

  const totalPages = Math.ceil(state.count / 10);
  const arrPages = fillArray(totalPages);

  useActivePage(setActivePage, inital);
  useCharacters(activePage);

  const handleRoute = (index: number, name) => {
    router.push(
      `character/${(index + 1).toString()}?page=${activePage}&search=${name}`
    );
  };

  useEffect(() => {
    const viewed = sessionStorage.getItem("viewed");

    if (viewed) {
      setViewed(JSON.parse(viewed));
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        {viewed.length > 0 && (
          <div className={styles.viewed}>Просмотренные:</div>
        )}
        {viewed && viewed.map((name, index) => <div key={index}>{name}</div>)}
        <div className={styles.characters}>
          {!isLoading &&
            characters &&
            characters.map((obj, index) => (
              <Card
                key={index}
                name={obj.name}
                onClick={() => handleRoute(index, obj.name)}
              />
            ))}
        </div>
        {isLoading && <Loader />}
      </main>
      <div className={styles.pagination}>
        <Pagination
          arrPages={arrPages}
          setActivePage={setActivePage}
          activePage={activePage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { inital: Boolean(context.query.page) },
  };
}
