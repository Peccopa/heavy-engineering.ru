import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contacts.module.scss';

const Contacts = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className={styles.contacts}>
      <div className="container">
        <h1 className={styles.title}>{t('contacts.title')}</h1>
        <p className={styles.description}>{t('contacts.description')}</p>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Map_marker_icon.svg"
              alt="Адрес"
            />
            <p>{t('contacts.address')}</p>
          </div>
          <div className={styles.infoItem}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Phone_icon.svg"
              alt="Телефон"
            />
            <p>{t('contacts.phone1')}</p>
            <p>{t('contacts.phone2')}</p>
          </div>
          <div className={styles.infoItem}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Email_icon.svg"
              alt="Email"
            />
            <p>{t('contacts.email')}</p>
          </div>
          <div className={styles.infoItem}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Clock_icon.svg"
              alt="Часы работы"
            />
            <p>{t('contacts.hours')}</p>
          </div>
        </div>

        <div className={styles.map}>
          <iframe
            title="Heavy Engineering Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.123456789!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab1a5b0b0b0b0%3A0x123456789abcdef!2sMoscow%2C+Promyshlennaya+St+12!5e0!3m2!1sen!2sru!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <form className={styles.form}>
          <h2>Отправить сообщение</h2>
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Сообщение" rows={5} required />
          <button type="submit">{t('contacts.button')}</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
