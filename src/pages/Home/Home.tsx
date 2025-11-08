import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.scss';
import heroPhoto from '@/assets/images/photo.jpg';

const Home = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{t('home.title')}</h1>
          <p className={styles.description}>{t('home.description')}</p>
          <button className={styles.button}>{t('home.button')}</button>
        </div>
        <div className={styles.hero}>
          <img src={heroPhoto} alt="Heavy Engineering" />
        </div>
      </div>
    </section>
  );
};

export default Home;
