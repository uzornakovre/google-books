import { getCurrentBook } from "../../services/books/selectors";
import { useAppSelector } from "../../services/hooks";
import styles from "./book-info.module.scss";

const BookInfo = () => {
  const currentBook = useAppSelector(getCurrentBook);
  return (
    <section className={styles.book_info}>
      <p className={styles.categories}>{currentBook?.categories}</p>
      <h2 className={styles.title}>{currentBook?.title}</h2>
      <p className={styles.authors}>{currentBook?.authors}</p>
      <img
        className={styles.image}
        src={currentBook?.image}
        alt={`Cover of ${currentBook?.title}`}
      />
      <p className={styles.description}>{currentBook?.description}</p>
      
    </section>
  );
};

export default BookInfo;
