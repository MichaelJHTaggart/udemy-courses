import styles from './Home.module.css';
import { TransactionForm } from './TransactionForm';
import { useSelector } from 'react-redux';
import { selectUserState } from '../../store/selectors/user';
import { useCollection } from '../../hooks/useCollection';
import TransactionList from './TransactionList';

export const Home = () => {
  const { user } = useSelector(selectUserState)
  const { documents, error } = useCollection(
    'transactions',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
  );


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};
