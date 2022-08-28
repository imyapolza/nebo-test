import clsx from "clsx";
import styles from "./MainInformation.module.scss";

interface MainInformationProps {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
}

const MainInformation: React.FC<MainInformationProps> = ({
  name,
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  skin_color,
}) => {
  return (
    <>
      <h2 className={styles.name}>{name}</h2>
      <ul className={clsx(styles.list, styles.list__wrapper)}>
        <li className={styles.property}>
          Год рождения:
          <div>{birth_year}</div>
        </li>
        <li className={styles.property}>
          Цвет глаз:
          <div>{eye_color}</div>
        </li>
        <li className={styles.property}>
          Пол
          <div>{gender}</div>
        </li>

        <li className={styles.property}>
          Цвет волос
          <div>{hair_color}</div>
        </li>
        <li className={styles.property}>
          Рост
          <div>{height} см</div>
        </li>
        <li className={styles.property}>
          Масса
          <div>{mass} кг</div>
        </li>
        <li className={styles.property}>
          Цвет кожи
          <div>{skin_color}</div>
        </li>
      </ul>
    </>
  );
};

export default MainInformation;
