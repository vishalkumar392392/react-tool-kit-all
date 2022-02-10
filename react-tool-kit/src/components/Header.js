import classes from './Header.module.css';
import {authActions} from '../store/slices/auth-slice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  const nav = (
    isAuthenticated && (<nav>
      <ul>
        <li>
          <a href='/'>My Products</a>
        </li>
        <li>
          <a href='/'>My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>)
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
     {nav}
    </header>
  );
};

export default Header;
