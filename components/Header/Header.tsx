import styles from "./Header.module.scss";
import SearchIcon from "../Icons/Search";
import SearchItem from "../SearchItem/SearchItem";
import { useDadJokeState } from "../../context/state";
import { setSearchByName } from "../../context/actions";
import Loader from "../Loader/Loader";
import { useState } from "react";
import { useRouter } from "next/router";
import useSearch from "../../hooks/useSearch";

const Header: React.FC = () => {
  const { dispatch, state } = useDadJokeState();
  const { isSearchLoading, searchCharacters } = state;
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const [isActiveFocus, setActiveFocus] = useState<boolean>(false);

  useSearch(searchTerm);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRoute = (item, index) => {
    dispatch(setSearchByName(item.name));

    router.push(
      `character/${(index + 1).toString()}?page=${state.page}&search=${
        item.name
      }`
    );
  };

  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.title}>Персонажи</div>
        <div className={styles.search__block}>
          <SearchIcon className={styles.icon} width={16} height={16} />
          <input
            className={styles.search}
            onChange={handleSearch}
            type="text"
            maxLength={20}
            value={searchTerm}
            placeholder={"Найти персонажа..."}
            onFocus={() => setActiveFocus(true)}
          />
        </div>

        {isActiveFocus && (
          <div className={styles.search__list}>
            <button
              className={styles.close__btn}
              onClick={() => setActiveFocus(false)}
            >
              Х
            </button>
            {!isSearchLoading &&
              searchCharacters &&
              searchCharacters.map((item, index) => (
                <SearchItem
                  key={index}
                  name={item.name}
                  onClick={() => handleRoute(item, index)}
                />
              ))}
            {searchCharacters.length === 0 && (
              <div className={styles.notFound}>Не найдено</div>
            )}
            {searchTerm.length === 0 && (
              <div className={styles.truncate}>...</div>
            )}
            {isSearchLoading && <Loader />}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
