import axios from "axios";
import { useEffect } from "react";

const usePromises = ({
  films,
  species,
  vehicles,
  setFilmsPromises,
  setSpeciesPromises,
  setVehiclesPromises,
  setReadyPromises,
}) => {
  useEffect(() => {
    setFilmsPromises(films.map((url) => axios.get(url)));
    setSpeciesPromises(species.map((url) => axios.get(url)));
    setVehiclesPromises(vehicles.map((url) => axios.get(url)));
    setReadyPromises(true);
  }, []);
};

export default usePromises;
