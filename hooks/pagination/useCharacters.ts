import { useRouter } from "next/router";
import { useEffect } from "react";
import { CharacterApi } from "../../api";
import { setCharacters, setCount, setLoading } from "../../context/actions";
import { useDadJokeState } from "../../context/state";

const useCharacters = (activePage: number) => {
  const { dispatch } = useDadJokeState();
  const router = useRouter();

  useEffect(() => {
    try {
      const fetchCharacters = async () => {
        dispatch(setLoading(true));

        const data = await CharacterApi.page(activePage.toString());
        router.push(`?page=${activePage}`);

        dispatch(setLoading(false));
        dispatch(setCharacters(data.results));
        dispatch(setCount(data.count));
      };

      fetchCharacters();
    } catch (err) {
      console.log(err);
    }
  }, [activePage]);
};

export default useCharacters;
