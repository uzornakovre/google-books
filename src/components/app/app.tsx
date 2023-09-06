import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { closeModals } from '../../services/modals/modals-slice';
import { getIsBookInfoModalOpen } from '../../services/modals/selectors';
import BookInfo from '../book-info/book-info';
import Modal from '../modal/modal';
import SearchForm from '../search-form/search-form';
import SearchResult from '../search-result/search-result';
import styles from './app.module.scss';

const App = () => {
  const dispatch = useAppDispatch();
  const isBookInfoModalOpen = useAppSelector(getIsBookInfoModalOpen);

  return (
    <div className={styles.app}>
      <SearchForm />
      <SearchResult />
      <Modal
        isOpen={isBookInfoModalOpen}
        onClose={() => dispatch(closeModals())}
      >
        <BookInfo />
      </Modal>
    </div>
  )
}

export default App;
