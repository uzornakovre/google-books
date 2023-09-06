import {
  getResultIsLoading,
  getSearchData,
  getSearchResult,
  getTotalItems,
} from "../../services/books/selectors";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import styles from "./search-result.module.scss";
import SearchResultItem from "./search-result-item/search-result-item";
import { useEffect, useState } from "react";
import { getBooks, setSearchData } from "../../services/books/books-slice";
import Preloader from "../preloader/preloader";

const SearchResult = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getResultIsLoading);
  const searchData = useAppSelector(getSearchData);
  const totalItems = useAppSelector(getTotalItems);
  const searchResult = useAppSelector(getSearchResult);
  const [bookList, setBookList] = useState<Array<JSX.Element>>([]);

  function renderCard(item: any, index: number) {
    return (
      <li key={`${item.id}_${index}`}>
        <SearchResultItem
          id={item.id}
          title={item.title}
          image={item.image}
          imageSmall={item.imageSmall}
          categories={item.categories}
          authors={item.authors}
          description={item.description}
        />
      </li>
    );
  }

  function handleLoadMoreClick(): void {
    const { keyword, category, sortBy, startIndex } = searchData;
    dispatch(setSearchData({ ...searchData, startIndex: startIndex + 30 }));
    dispatch(
      getBooks({
        keyword,
        category,
        sortBy,
        startIndex: startIndex + 30,
      })
    );
  }

  useEffect(() => {
    setBookList(searchResult.map((item, index) => renderCard(item, index)));
  }, [searchResult]);

  return (
    <section className={styles.search_result} aria-label="Search Result">
      {!searchResult.length && (
        <p className={styles.tip}>Here will be search result</p>
      )}
      {totalItems > 0 && <p className={styles.tip}>{totalItems} books found</p>}
      {isLoading && <Preloader />}
      <ul className={styles.list}>{bookList}</ul>
      {searchResult.length >= 30 && (
        <button
          className={styles.load_more}
          type="button"
          onClick={handleLoadMoreClick}
        >
          {isLoading ? <Preloader /> : "Load more"}
        </button>
      )}
    </section>
  );
};

export default SearchResult;
