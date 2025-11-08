import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import photo from '../../assets/images/photo.jpg';
import style from './Home.module.scss';

const Home = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="home">
      <div className={style.content}>
        <img className={style.homePhoto} src={photo} alt="factory" />
        <h1>{t('home.title').toUpperCase()}</h1>
        <p>{t('home.description')}</p>
        <button type="button">{t('home.button').toUpperCase()}</button>
      </div>
    </section>
  );
};

export default Home;
