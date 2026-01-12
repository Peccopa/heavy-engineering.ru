import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';
import heroPhoto from '@/assets/images/photo.png';

const About = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t('about.title')}</h1>
            <p className={styles.description}>{t('about.descriptions.descr-1')}</p>
            <p className={styles.description}>{t('about.descriptions.descr-2')}</p>
            <button className={styles.button}>{t('about.button')}</button>
          </div>
          <div className={styles.hero}>
            <img src={heroPhoto} alt="Heavy Engineering" />
          </div>
        </div>
      </section>
      {/* <section className={styles.slider}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t('about.title')}</h1>
            <p className={styles.description}>{t('about.description')}</p>
            <button className={styles.button}>{t('about.button')}</button>
          </div>
          <div className={styles.hero}>
            <img src={heroPhoto} alt="Heavy Engineering" />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
