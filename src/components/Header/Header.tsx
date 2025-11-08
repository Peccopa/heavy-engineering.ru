import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/logo-full.svg'; // импортируем как обычный ресурс

const Header = (): ReactElement => {
  const { t, i18n } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={'container'}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Heavy Engineering" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <Link to="/">{t('home.title').toUpperCase()}</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about">{t('about.title').toUpperCase()}</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contacts">{t('contacts.title').toUpperCase()}</Link>
            </li>
          </ul>
          <button
            className={styles.navBtn}
            onClick={() =>
              void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
            }
          >
            {i18n.language.toUpperCase()}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
