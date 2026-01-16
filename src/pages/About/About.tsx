import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';
import factory from '@/assets/icons/factory.svg';
import technology from '@/assets/icons/technology.svg';
import support from '@/assets/icons/support.svg';
import heroPhoto from '@/assets/images/photo.png';

const About = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <img src={heroPhoto} alt="Heavy Engineering" />
          </div>
          <div className={styles.content}>
            <div className={styles.mainText}>
              <h1 className={styles.title}>{t('about.title')}</h1>
              <p className={styles.description}>
                {t('about.descriptions.descr-1')}
              </p>
              <p className={styles.description}>
                {t('about.descriptions.descr-2')}
              </p>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>
                  <img src={factory} alt="factory" />
                  <h4>Комплексные решения</h4>
                </div>
                <p>
                  Полный цикл инжиниринговых услуг — от разработки
                  технологических решений и проектирования до поставки.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>
                  <img src={technology} alt="technology" />
                  <h4>Современные технологии</h4>
                </div>
                <p>
                  Внедрение современных технологий — от адаптации процессов до
                  промышленной реализации производства.
                </p>
              </div>
              <div className={`${styles.card} ${styles.cardImage}`}></div>
              <div className={`${styles.card} ${styles.cardImage}`}></div>
              <div className={styles.card}>
                <div className={styles.cardTitle}>
                  <img src={support} alt="support" />
                  <h4>Сервис и поддержка</h4>
                </div>
                <p>
                  Комплексное сервисное сопровождение оборудования — от
                  пусконаладочных работ до технической поддержки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
