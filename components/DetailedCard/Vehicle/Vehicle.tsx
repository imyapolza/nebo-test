import clsx from "clsx";
import styles from "./Vehicle.module.scss";

interface VehicleProps {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
}

const Vehicle: React.FC<VehicleProps> = ({
  name,
  model,
  vehicle_class,
  manufacturer,
  length,
  cost_in_credits,
  crew,
  passengers,
  max_atmosphering_speed,
  cargo_capacity,
  consumables,
}) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>Имя:</div>
          <div>{name}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>Модель:</div>
          <div>{model}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>Класс:</div>
          <div>{vehicle_class}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>Производитель:</div>
          <div>{manufacturer}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>Длина:</div>
          <div>{length} м</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>Стоимость:</div>
          <div>{cost_in_credits} г-х кредитов</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>
            Количество существ на борту:
          </div>
          <div>{crew}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>Пассажиры:</div>
          <div>{passengers}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>
            Максимальная скорость в атмосфере:
          </div>
          <div>{max_atmosphering_speed}</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>
            Грузоподъемность:
          </div>
          <div>{cargo_capacity} кг</div>
        </li>
        <li className={styles.list__item}>
          <div className={clsx(styles.name, styles.header)}>
            Автономность работы:
          </div>
          <div>{consumables}</div>
        </li>
      </ul>
    </div>
  );
};

export default Vehicle;
