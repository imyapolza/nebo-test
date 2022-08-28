import { useEffect } from "react";
import { CharacterApi } from "../api";
import { setSearchCharacters, setSearchLoading } from "../context/actions";
import { useDadJokeState } from "../context/state";

const useSearch = (searchTerm: string) => {
  const { dispatch } = useDadJokeState();

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      try {
        dispatch(setSearchLoading(true));

        const { results } = await CharacterApi.search(searchTerm);

        dispatch(setSearchLoading(false));
        dispatch(setSearchCharacters(results));
      } catch (err) {
        console.log(err);
      }
    }, 600);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);
};

export default useSearch;
