import styles from "./CharacterName.module.scss";

interface CharacterNameProps {
  name: string;
  onClick: () => React.MouseEventHandler<HTMLElement> | void;
}

const CharacterName: React.FC<CharacterNameProps> = ({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div>
        <h2 className={styles.name}>{name}</h2>
      </div>
    </button>
  );
};

export default CharacterName;
