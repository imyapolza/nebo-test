import React, { useEffect, useState } from "react";
import usePromises from "../../hooks/usePromises";
import { ICharacter, IFilm, ISpecie, IVehicle } from "../../types";
import fetchItems from "../../utils/fetchItems";
import Loader from "../Loader/Loader";
import styles from "./DetailedCard.module.scss";
import Film from "./Film/Film";
import MainInformation from "./MainInformation/MainInformation";
import Specie from "./Specie/Specie";
import Vehicle from "./Vehicle/Vehicle";

const DetailedCard: React.FC<ICharacter> = ({
  name,
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  skin_color,
  films,
  species,
  vehicles,
}) => {
  const [filmsPromises, setFilmsPromises] = useState<
    Array<Promise<ICharacter>>
  >([]);
  const [filmsList, setFilmsList] = useState<Array<IFilm>>([]);
  const [isLoadingFilms, setLoadingFilms] = useState<boolean>(false);

  const [speciesPromises, setSpeciesPromises] = useState<
    Array<Promise<ISpecie>>
  >([]);
  const [speciesList, setSpeciesList] = useState<Array<ISpecie>>([]);
  const [isLoadingSpecies, setLoadingSpecies] = useState<boolean>(false);

  const [vehiclesPromises, setVehiclesPromises] = useState<
    Array<Promise<IVehicle>>
  >([]);
  const [vehiclesList, setVehiclesList] = useState<Array<IVehicle>>([]);
  const [isLoadingVehicles, setLoadingVehicles] = useState<boolean>(false);

  const [isReadyPromises, setReadyPromises] = useState<boolean>();

  usePromises({
    films,
    species,
    vehicles,
    setFilmsPromises,
    setSpeciesPromises,
    setVehiclesPromises,
    setReadyPromises,
  });

  useEffect(() => {
    if (isReadyPromises) {
      fetchItems(setLoadingFilms, filmsPromises, setFilmsList);
      fetchItems(setLoadingSpecies, speciesPromises, setSpeciesList);
      fetchItems(setLoadingVehicles, vehiclesPromises, setVehiclesList);
    }
  }, [isReadyPromises]);

  return (
    <div className={styles.wrapper}>
      <MainInformation
        name={name}
        birth_year={birth_year}
        eye_color={eye_color}
        gender={gender}
        hair_color={hair_color}
        height={height}
        mass={mass}
        skin_color={skin_color}
      />

      {isLoadingFilms && (
        <>
          <div className={styles.loading__text}>Загрузка фильмов...</div>
          <Loader />
        </>
      )}

      {!isLoadingFilms && filmsList.length > 0 && (
        <>
          <div className={styles.block}>
            <div className={styles.block__title}>Фильмы:</div>

            <div className={styles.films}>
              {filmsList.length > 0 &&
                filmsList.map((film, index) => <Film key={index} {...film} />)}
            </div>
          </div>
        </>
      )}

      {isLoadingSpecies && (
        <>
          <div className={styles.loading__text}>Загрузка существ...</div>
          <Loader />
        </>
      )}

      {!isLoadingSpecies && speciesList.length > 0 && (
        <>
          <div className={styles.block}>
            <div className={styles.block__title}>Существа:</div>
            <div className={styles.species}>
              {speciesList.length > 0 &&
                speciesList.map((specie, index) => (
                  <Specie key={index} {...specie} />
                ))}
            </div>
          </div>
        </>
      )}

      {isLoadingVehicles && (
        <>
          <div className={styles.loading__text}>
            Загрузка средств передвижения...
          </div>
          <Loader />
        </>
      )}

      {!isLoadingVehicles && vehiclesList.length > 0 && (
        <>
          <div className={styles.block}>
            <div className={styles.block__title}>Средства передвижения:</div>
            <div className={styles.vehicles}>
              {vehiclesList.length > 0 &&
                vehiclesList.map((vehicle, index) => (
                  <Vehicle key={index} {...vehicle} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailedCard;
