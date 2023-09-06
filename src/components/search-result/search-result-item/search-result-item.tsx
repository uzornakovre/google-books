import { FC } from "react";
import styles from "./search-result-item.module.scss";

const SearchResultItem: FC<IBook> = ({
  id,
  title,
  categories,
  image,
  imageSmall,
  authors,
  description,
}) => {
  return (
    <article className={styles.book_card}>
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
}

export default SearchResultItem;
