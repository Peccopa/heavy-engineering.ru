import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import logo from '@/assets/images/logo-full.svg';
import phoneIcon from '@/assets/images/phone.svg';
import emailIcon from '@/assets/images/email.svg';
import globeIcon from '@/assets/images/globe.svg';

const Footer = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          {/* Левая часть — логотип */}
          <div className={styles.brand}>
            <img src={logo} alt="Heavy Engineering" className={styles.logo} />
            <p className={styles.brandText}>
              {t('footer.description', {
                defaultValue:
                  'Официальный дилер катализаторов для сернокислотных производств',
              })}
            </p>
          </div>

          {/* Правая часть — контакты */}
          <address className={styles.contacts}>
            <a href={`tel:${t('footer.phone1')}`} className={styles.link}>
              <img src={phoneIcon} alt="Phone" />
              {t('footer.phone1')}
            </a>

            <a href={`tel:${t('footer.phone2')}`} className={styles.link}>
              <img src={phoneIcon} alt="Phone" />
              {t('footer.phone2')}
            </a>

            <a href={`mailto:${t('footer.email')}`} className={styles.link}>
              <img src={emailIcon} alt="Email" />
              {t('footer.email')}
            </a>

            <a
              href="https://www.heavy-engineering.ru"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <img src={globeIcon} alt="Website" />
              {t('footer.site')}
            </a>
          </address>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Heavy Engineering. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
