import clsx from "clsx";
import React from "react";
import styles from "./Specie.module.scss";

interface SpecieProps {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
}

const Specie: React.FC<SpecieProps> = ({
  name,
  classification,
  designation,
  average_height,
  average_lifespan,
  eye_colors,
  hair_colors,
  skin_colors,
  language,
}) => {
  function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>Имя:</div>
          <div>{name}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.header)}>Классификация вида:</div>
          <div>{classification}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.header)}>Характеристика вида:</div>
          <div>{designation}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.header)}>Средний рост:</div>
          <div>{average_height} см</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.header)}>
            Средняя продолжительность жизни:
          </div>
          <div>
            {" "}
            {average_lifespan +
              " " +
              getNoun(average_lifespan, "год", "года", "лет")}
          </div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.header)}>Цвета глаз:</div>
          <div>{eye_colors}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.header)}>Цвета волос:</div>
          <div>{hair_colors}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.header)}>Цвета тела:</div>
          <div>{skin_colors}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.header)}>Язык:</div>
          <div>{language}</div>
        </li>
      </ul>
    </div>
  );
};

export default Specie;
