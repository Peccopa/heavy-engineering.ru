import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';
import factory from '@/assets/icons/factory.svg';
import technology from '@/assets/icons/technology.svg';
import support from '@/assets/icons/support.svg';

const About = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.about}>
        <div className={styles.content}>
          <div className={styles.photo} title={'Heavy Engineering'}></div>
          <div className={styles.text}>
            <h1 className={styles.title}>{t('about.title')}</h1>
            <p className={styles.description}>
              {t('about.descriptions.descr-1')}
            </p>
            <ul className={styles.list}>
            <h4 className={styles.subTitle}>
              {t('about.descriptions.list.title')}
            </h4>
              <li>{t('about.descriptions.list.item1')}</li>
              <li>{t('about.descriptions.list.item2')}</li>
              <li>{t('about.descriptions.list.item3')}</li>
            </ul>
            <p className={styles.description}>
              {t('about.descriptions.descr-2')}
            </p>
            <p className={styles.description}>
              {t('about.descriptions.descr-3')}
            </p>
            <p className={styles.description}>
              {t('about.descriptions.descr-4')}
            </p>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <img className={styles.cardIcon} src={factory} alt="factory" />
                <h4 className={styles.cardTitle}>
                  {t('about.cards.card-1.title')}
                </h4>
              </div>
              <p className={styles.cardText}>{t('about.cards.card-1.text')}</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <img
                  className={styles.cardIcon}
                  src={technology}
                  alt="technology"
                />
                <h4 className={styles.cardTitle}>
                  {t('about.cards.card-2.title')}
                </h4>
              </div>
              <p className={styles.cardText}>{t('about.cards.card-2.text')}</p>
            </div>
            <div className={`${styles.card} ${styles.cardImg}`}></div>
            <div className={`${styles.card} ${styles.cardImg}`}></div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <img className={styles.cardIcon} src={support} alt="support" />
                <h4 className={styles.cardTitle}>
                  {t('about.cards.card-3.title')}
                </h4>
              </div>
              <p className={styles.cardText}>{t('about.cards.card-3.text')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
