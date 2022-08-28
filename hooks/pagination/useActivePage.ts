import { useRouter } from "next/router";
import { useEffect, useLayoutEffect } from "react";
import { setPage } from "../../context/actions";
import { useDadJokeState } from "../../context/state";

const useActivePage = (setActivePage: (page: number) => void, inital) => {
  const { dispatch } = useDadJokeState();
  const router = useRouter();

  useEffect(() => {
    if (Number(router.query.page)) {
      setActivePage(Number(router.query.page));
      dispatch(setPage(router.query.page));
    } else {
      setActivePage(Number(1));
      dispatch(setPage(1));
    }
  }, []);

  useEffect(() => {
    if (!inital) {
      setActivePage(1);
      dispatch(setPage(1));
    }
  }, [inital]);
};

export default useActivePage;
