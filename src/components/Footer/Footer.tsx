import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import logo from '@/assets/images/logo-full.svg';
import phoneIcon from '@/assets/images/phone.svg';
import emailIcon from '@/assets/images/email.svg';
import globeIcon from '@/assets/images/globe.svg';
import i18n from '@/i18n';
// import clsx from 'clsx';

const Footer = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div
            className={`${styles.brand} ${
              i18n.language === 'ru' ? styles.brandRu : ''
            }`}
          >
            <img src={logo} alt="Heavy Engineering" className={styles.logo} />
            <p
              className={
                i18n.language === 'ru'
                  ? `${styles.text} ${styles.textRu}`
                  : `${styles.text} ${styles.textEn}`
              }
            >
              {t('footer.subtitle', {
                defaultValue: 'HEAVY ENGINEERING LLC',
              })}
            </p>
          </div>

          {/* <p className={styles.copy}>
              © {new Date().getFullYear()} Heavy Engineering. {t('footer.copy')}.
            </p> */}

          <div
            className={
              i18n.language === 'ru'
                ? `${styles.companyInfo} `
                : `${styles.hide}`
            }
          >
            <p>{t('footer.info.info1')}</p>
            <p>{t('footer.info.info2')}</p>
            <p>{t('footer.info.info3')}</p>
          </div>

          <address className={styles.contacts}>
            <a
              href={`tel:${t('footer.contacts.phone1')}`}
              className={styles.link}
            >
              <img src={phoneIcon} alt="Phone" />
              {t('footer.contacts.phone1')}
            </a>

            <a
              href={`mailto:${t('footer.contacts.email')}`}
              className={styles.link}
            >
              <img src={emailIcon} alt="Email" />
              {t('footer.contacts.email')}
            </a>

            <a
              href="https://www.heavy-engineering.ru"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <img src={globeIcon} alt="Website" />
              {t('footer.contacts.site')}
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
