import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';

const About = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className={styles.about}>
      <div className="container">
        <h1 className={styles.title}>{t('about.title')}</h1>
        <p className={styles.description}>{t('about.description')}</p>

        <h2 className={styles.subtitle}>{t('about.missionTitle')}</h2>
        <p className={styles.mission}>{t('about.mission')}</p>

        <h2 className={styles.subtitle}>{t('about.partnersTitle')}</h2>
        <ul className={styles.partners}>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Samara_Catalyst_Plant_logo.png"
              alt="Самарский завод катализаторов"
            />
            Самарский завод катализаторов (SZK)
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e3/EuroChem_logo.svg"
              alt="ЕвроХим"
            />
            ЕвроХим
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Phosphorit_logo_placeholder.png"
              alt="Фосфорит"
            />
            Фосфорит
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Balakovo_Mineral_Fertilizers_logo_placeholder.png"
              alt="Балаковские минеральные удобрения"
            />
            Балаковские минеральные удобрения
          </li>
        </ul>

        <h2 className={styles.subtitle}>{t('about.certificatesTitle')}</h2>
        <ul className={styles.certificates}>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/CPR_logo_placeholder.png"
              alt="Дилерский сертификат CPR"
            />
            Дилерский сертификат CPR
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2b/KEY_logo_placeholder.png"
              alt="Дилерский сертификат KEY"
            />
            Дилерский сертификат KEY
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
