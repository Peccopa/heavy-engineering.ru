import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">Главная</Link>
        <Link to="/about">О компании</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  );
};

export default Header;
