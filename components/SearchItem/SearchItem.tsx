import { useRouter } from "next/router";
import React from "react";
import styles from "./SearchItem.module.scss";

interface SearchItemProps {
  name: string;
  onClick?: () => void;
}

const SearchItem: React.FC<SearchItemProps> = ({ name, onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      {name}
    </div>
  );
};

export default SearchItem;
