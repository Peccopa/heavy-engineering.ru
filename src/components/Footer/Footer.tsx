import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

const Footer = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={'container'}>
        <ul className={styles.footLinks}>
          <li className={styles.footItem}>
            <Link to="/">{t('footer.phone1').toUpperCase()}</Link>
          </li>
          <li className={styles.footItem}>
            <Link to="/">{t('footer.email').toUpperCase()}</Link>
          </li>
          <li className={styles.footItem}>
            <Link to="/">{t('footer.phone2').toUpperCase()}</Link>
          </li>
          {/* <li className={styles.footItem}>
            <Link to="/">{t('footer.site').toUpperCase()}</Link>
          </li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
