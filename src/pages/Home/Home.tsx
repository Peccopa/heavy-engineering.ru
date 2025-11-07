import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
// import './Home.module.scss';

const Home = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="home">
      <div className={'container'}>
        <h1>{t('home.title').toUpperCase()}</h1>
        <p>{t('home.description')}</p>
        <button type="button">{t('home.button').toUpperCase()}</button>
      </div>
    </section>
  );
};

export default Home;
