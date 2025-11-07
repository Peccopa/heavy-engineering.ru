import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';

const Header = (): ReactElement => {
  const { t, i18n } = useTranslation();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">{t('home.title').toUpperCase()}</Link>
        <Link to="/about">{t('about.title').toUpperCase()}</Link>
        <Link to="/contacts">{t('contacts.title').toUpperCase()}</Link>
        <button
          onClick={() =>
            void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
          }
        >
          {i18n.language.toUpperCase()}
        </button>
      </nav>
    </header>
  );
};

export default Header;
