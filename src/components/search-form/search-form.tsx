/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./search-form.module.scss";
import useFormData from "../../hooks/useFormData";
import { TFormValues } from "../../hooks/useFormData";
import { FormEvent } from "react";
// import { useContext, useRef, useEffect, useState } from "react";
// import { MoviesListContext } from "../../contexts/MoviesListContextProvider";
// import { MoviesSearchResultContext } from "../../contexts/MoviesSearchResultContext";
// import { SearchedContext } from "../../contexts/SearchedContext";

function SearchForm() {
  const formData = useFormData<TFormValues>({
    search: "",
  });
  // const moviesList = useContext(MoviesListContext);
  // const { searched, setSearched } = useContext(SearchedContext);
  // const { moviesSearchResult, setMoviesSearchResult } = useContext(MoviesSearchResultContext);
  // let filteredMoviesList = [];
  // let data = { movies: searchData, savedMovies: searchData };

  // function filterByName(name, list, page) {
  //   data[page] = {...data[page], input: name };
  //   filteredMoviesList = list.filter((movie) => {
  //     return name ? movie.nameRU.toLowerCase().includes(name.toLowerCase()) ||
  //       movie.nameEN.toLowerCase().includes(name.toLowerCase()) : [];
  //   });
  // }

  // function filterByDuration(isOn, page) {
  //   data[page] = {...data[page], filterShorts: !isOn };

  //   if (!isOn) {
  //     filteredMoviesList = filteredMoviesList.filter((movie) => movie.duration > 40);
  //     data[page] = {...data[page], filterShorts: !isOn };
  //   }
  // }

  // function createResult(page) {
  //   let result = [];

  //   for (let i = 0; i < (moviesQuantity >= filteredMoviesList.length
  //     ? filteredMoviesList.length : moviesQuantity); i++) {
  //     result.push(filteredMoviesList[i]);
  //   }

  //   setMoviesSearchResult({ ...moviesSearchResult, [page]: result, filteredMoviesList: filteredMoviesList });
  //   data[page] = {...data[page], filtered: filteredMoviesList, result: result};
  // }

  // function renderCards(page) {

  //   if (page === 'movies') {
  //     filterByName(formData.values.search, moviesList, page);
  //   }
  //   if (page === 'savedMovies') {
  //     filterByName(formData.values.search, savedMovies, page);
  //   }

  //   filterByDuration(shortsRef.current.checked, page);
  //   createResult(page);
  // }

  // function storeData() {
  //   if (page === 'movies') {
  //     localStorage.setItem('moviesSearchData', JSON.stringify(data.movies));
  //   }
  // }

  // function handleSearchSubmit(evt) {
  //   evt.preventDefault();
  //   if (formData.values.search !== '') {
  //     setSearchError(false);
  //     renderCards(page);
  //     storeData();
  //     setSearched({ ...searched, [page]: true });
  //   } else {
  //     setSearchError(true);
  //   }
  // }

  // useEffect(() => {
  //   renderCards(page);
  // }, [moviesQuantity]);

  // useEffect(() => {
  //   const moviesSearchData = JSON.parse(localStorage.getItem('moviesSearchData')) || { input: '' };
  //   const savedMoviesSearchData = JSON.parse(localStorage.getItem('savedMoviesSearchData')) || { input: '' };

  //   if (page === 'savedMovies') {
  //     formData.values.search = savedMoviesSearchData.input;
  //     shortsRef.current.checked = !savedMoviesSearchData.filterShorts;
  //   }
  //   if (page === 'movies') {
  //     formData.values.search = moviesSearchData.input;
  //     shortsRef.current.checked = !moviesSearchData.filterShorts;
  //   }
  // }, []);

  function handleSearchSubmit(evt: FormEvent) {
    evt.preventDefault();
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
            name="search"
            placeholder="Enter a keyword to search books"
            onChange={formData.handleChange}
            value={formData.values.search || ""}
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
            <label htmlFor="categories">Category</label>
            <select
              className={styles.select_menu}
              name="categories"
              id="categories"
            >
              <option className={styles.select_option} value="all">
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
            <label htmlFor="sort_by">Sort by</label>
            <select
              className={styles.select_menu}
              name="sort_by"
              id="sort_by"
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
}

export default SearchForm;
