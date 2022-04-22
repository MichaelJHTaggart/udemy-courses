import styles from './TransactionList.module.css';
import { useFirestore } from '../../hooks/useFirestore';

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore('transactions');
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>${transaction.amount}</p>
          <button
            className={styles.button}
            onClick={() => deleteDocument(transaction.id)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}