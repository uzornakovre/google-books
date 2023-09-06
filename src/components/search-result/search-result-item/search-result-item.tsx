import { FC } from "react";
import styles from "./search-result-item.module.scss";
import { useAppDispatch } from "../../../services/hooks";
import { setBookInfoModalOpen } from "../../../services/modals/modals-slice";
import { setCurrentBook } from "../../../services/books/books-slice";

const SearchResultItem: FC<IBook> = ({
  id,
  title,
  categories,
  image,
  authors,
  description
}) => {
  const dispatch = useAppDispatch();
  const cardData = { id, title, categories, image, authors, description }

  function handleCardClick(data: IBook) {
    dispatch(setCurrentBook(data));
    dispatch(setBookInfoModalOpen(true));
  }

  return (
    <article className={styles.book_card} onClick={(() => handleCardClick(cardData))}>
      <div className={styles.heading}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{categories && categories[0]}</p>
      </div>
      <div className={styles.image_wrapper}>
        <img className={styles.image} src={image} alt={`Cover of ${title}`} />
      </div>
      <div className={styles.caption}>
        <p className={styles.authors}>{authors}</p>
      </div>
    </article>
  );
};

export default SearchResultItem;
