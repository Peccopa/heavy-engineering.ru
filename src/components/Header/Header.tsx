import type { ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import logo from '@/assets/images/logo-full.svg';

const Header = (): ReactElement => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Heavy Engineering" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                {t('home.title')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalysts"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                {t('catalysts.title')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                {t('about.title')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                {t('contacts.title')}
              </NavLink>
            </li>
          </ul>

          <button
            type="button"
            className={styles.button}
            onClick={toggleLanguage}
          >
            {i18n.language.toUpperCase()}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
