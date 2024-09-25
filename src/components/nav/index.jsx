import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

function myActive(isActive) {
  return {
    color: isActive ? 'red' : 'black',
    opacity: isActive ? 0.6 : 1,
  };
}

function Nav() {
  return (
    <nav>
      <NavLink to="/home" style={({ isActive }) => myActive(isActive)}>
        store
      </NavLink>
      <NavLink to="/basket" style={({ isActive }) => myActive(isActive)}>
        basket
      </NavLink>
      <NavLink to="/contacts" style={({ isActive }) => myActive(isActive)}>
        contacts
      </NavLink>
    </nav>
  );
}

export default Nav;
