/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./search-form.module.scss";
import useFormData from "../../hooks/useFormData";
import { TFormValues } from "../../hooks/useFormData";
import { FormEvent } from "react";
import { useAppDispatch } from "../../services/hooks";
import { getBooks } from "../../services/books/books-slice";

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const formData = useFormData<TFormValues>({
    keyword: "",
    category: "",
    sortBy: "relevance",
  });
  const { keyword, category, sortBy } = formData.values;

  function handleSearchSubmit(evt: FormEvent) {
    evt.preventDefault();
    dispatch(getBooks({ keyword, category, sortBy, startIndex: 0 }));
  }

  return (
    <section className={styles.search_form_container} aria-label="Search form">
      <form
        className={styles.search_form}
        onSubmit={handleSearchSubmit}
        noValidate
      >
        <fieldset className={styles.main}>
          <input
            className={styles.input}
            type="text"
            name="keyword"
            placeholder="Enter a keyword to search books"
            onChange={formData.handleChange}
            value={keyword || ""}
            minLength={1}
            autoComplete="off"
            required
          ></input>
          <button
            className={styles.submit}
            type="submit"
            disabled={!formData.isValid}
          >
            Search
          </button>
        </fieldset>
        <fieldset className={styles.filter}>
          <div className={styles.filter_item}>
            <label htmlFor="category">Category</label>
            <select
              className={styles.select_menu}
              name="category"
              id="category"
              onChange={formData.handleChange}
              value={category}
            >
              <option className={styles.select_option} value="">
                All
              </option>
              <option className={styles.select_option} value="art">
                Art
              </option>
              <option className={styles.select_option} value="biography">
                Biography
              </option>
              <option className={styles.select_option} value="computers">
                Computers
              </option>
              <option className={styles.select_option} value="history">
                History
              </option>
              <option className={styles.select_option} value="medical">
                Medical
              </option>
              <option className={styles.select_option} value="poetry">
                Poetry
              </option>
            </select>
          </div>
          <div className={styles.filter_item}>
            <label htmlFor="sortBy">Sort by</label>
            <select
              className={styles.select_menu}
              name="sortBy"
              id="sortBy"
              onChange={formData.handleChange}
              value={sortBy}
            >
              <option className={styles.select_option} value="relevance">
                Relevance
              </option>
              <option className={styles.select_option} value="newest">
                Newest
              </option>
            </select>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default SearchForm;
