import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { selectCurrentUser } from '../../store/selectors/user';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const { logout } = useLogout();
  const user = useSelector(selectCurrentUser);
  

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to={'/'}>myMoney</Link>
        </li>

        {!user && (
          <>
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
            <li>
              <Link to={'/signup'}>Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
