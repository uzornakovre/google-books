/* eslint-disable react-hooks/exhaustive-deps */
import MoviesCard from '../search-result/search-result-item/search-result-item';
import { useContext, useEffect, useState } from 'react';
import { MoviesSearchResultContext } from '../../contexts/MoviesSearchResultContext';
import { SearchedContext } from '../../contexts/SearchedContext';
import { IsLoadingContext } from '../../contexts/IsLoadingContext';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ page,
                          onMoreClick,
                          saveMovie,
                          deleteMovie,
                          savedMovies
                        }) {                    
  const { moviesSearchResult } = useContext(MoviesSearchResultContext);
  const { isLoading } = useContext(IsLoadingContext);
  const { searched } = useContext(SearchedContext);
  const [savedMoviesCardElements, setSavedMoviesCardElements] = useState([]);
  const [moviesCardElements, setMoviesCardElements] = useState([]);
  const notFoundError = (<span className="movies__error">Ничего не найдено</span>);
  const initialToolTip = (<span className="movies__error movies__error_initial">Для поиска фильмов введите ключевое слово</span>);

  function renderCard(card) {
    return (
      <li key={(card.id && card.id) || card._id}>
        <MoviesCard card={card}
                    page={page}
                    saveMovie={saveMovie}
                    deleteMovie={deleteMovie}
                    savedMovies={savedMovies} />
    </li>
    );
  }

  useEffect(() => {
    setMoviesCardElements(moviesSearchResult.movies.map(moviesCard => renderCard(moviesCard)));

    if (searched.savedMovies && page === 'savedMovies') {
      setSavedMoviesCardElements(moviesSearchResult.savedMovies.map(moviesCard => renderCard(moviesCard)));
    } else if (page === 'savedMovies') {
      setSavedMoviesCardElements(savedMovies.map(moviesCard => renderCard(moviesCard)));
    }
  }, [moviesSearchResult, savedMovies]);

  return (
    <section className="movies" aria-label="Фильмы">
      {(moviesSearchResult.movies.length === 0 && page === 'movies' && searched.movies) && notFoundError}
      {(moviesSearchResult.movies.length === 0 && page === 'movies' && !searched.movies) && initialToolTip}
      {(moviesSearchResult.savedMovies.length === 0 && page === 'savedMovies' && searched.savedMovies) && notFoundError}
      {isLoading && <Preloader />}
      <ul className="movies__list">
        {page === 'movies' && moviesCardElements}
        {page === 'savedMovies' && savedMoviesCardElements}
      </ul>
      {(moviesSearchResult.filteredMoviesList.length > 12 &&
        moviesCardElements.length !== 0 && 
        moviesCardElements.length < moviesSearchResult.filteredMoviesList.length) && 
        <button className={`movies__load-more movies__load-more_page_${page}`}
                type="button"
                onClick={onMoreClick}>Ещё</button>
      }
    </section>
  )
}

export default MoviesCardList;