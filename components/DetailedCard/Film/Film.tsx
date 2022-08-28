import clsx from "clsx";
import { useState } from "react";
import { IFilm } from "../../../types";
import styles from "./Film.module.scss";

const Film : React.FC<IFilm>= ({
  title,
  episode_id,
  opening_crawl,
  director,
  producer,
  release_date,
}) => {
  const [showOpening, setShowOpening] = useState<boolean>(false);

  const handleShowOpening = () => {
    setShowOpening(!showOpening);
  };

  return (
    <div className={styles.wrapper}>
      <ul>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>Название:</div>
          <div>{title}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.episode, styles.header)}>
            Номер эпизода:
          </div>
          <div>{episode_id}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.opening, styles.header)}>
            Вступительная речь:
          </div>
          {showOpening ? (
            <button className={styles.show__btn} onClick={handleShowOpening}>
              Скрыть
            </button>
          ) : (
            <button className={styles.show__btn} onClick={handleShowOpening}>
              Показать
            </button>
          )}

          {showOpening && (
            <div className={styles.opening__text}>{opening_crawl}</div>
          )}
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.header)}>Режиссер:</div>
          <div>{director}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.header)}>Продюссеры:</div>
          <div>{producer}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.header)}>Дата выпуска фильма:</div>
          <div>{release_date}</div>
        </li>
      </ul>
    </div>
  );
};

export default Film;
