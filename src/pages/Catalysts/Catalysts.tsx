import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Catalysys.module.scss';

// Импортируем локальные изображения
import vanadiumHT from '@/assets/images/catalysts/vanadium-ht.jpg';
import vanadiumVT from '@/assets/images/catalysts/vanadium-vt.jpg';
import cesium from '@/assets/images/catalysts/cesium.jpg';

const Catalysts = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className={styles.catalysts}>
      <div className="container">
        <h1 className={styles.title}>{t('catalysts.title')}</h1>
        <p className={styles.description}>{t('catalysts.description')}</p>

        <ul className={styles.list}>
          <li>
            <img
              src={vanadiumHT}
              alt="Vanadium HT catalyst"
              className={styles.image}
            />
            {t('catalysts.list.item1')}
          </li>
          <li>
            <img
              src={vanadiumVT}
              alt="Vanadium VT catalyst"
              className={styles.image}
            />
            {t('catalysts.list.item2')}
          </li>
          <li>
            <img src={cesium} alt="Cesium catalyst" className={styles.image} />
            {t('catalysts.list.item3')}
          </li>
        </ul>

        <p className={styles.note}>{t('catalysts.note')}</p>

        <button className={styles.button}>{t('catalysts.button')}</button>
      </div>
    </section>
  );
};

export default Catalysts;
