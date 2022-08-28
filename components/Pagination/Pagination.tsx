import clsx from "clsx";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  arrPages: Array<number>;
  setActivePage: (arg: number | ((a: number) => number)) => void;
  activePage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  arrPages,
  setActivePage,
  activePage,
  totalPages,
}) => {
  return (
    <>
      <ul className={styles.pagination}>
        <li className={styles.item}>
          <button
            className={clsx(styles.button, styles.prev)}
            onClick={() => activePage > 1 && setActivePage((prev) => prev - 1)}
          >
            Prev
          </button>
        </li>
        {arrPages &&
          arrPages.map((number, index) => (
            <li
              key={index}
              className={clsx(
                styles.item,
                styles.pageNumber,
                activePage === number && styles.active
              )}
            >
              <button
                className={styles.button}
                onClick={() => setActivePage(number)}
              >
                {number}
              </button>
            </li>
          ))}

        <li>
          <button
            className={clsx(styles.button, styles.next)}
            onClick={() =>
              activePage < totalPages && setActivePage((prev) => prev + 1)
            }
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
