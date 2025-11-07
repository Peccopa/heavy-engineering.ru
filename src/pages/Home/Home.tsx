import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
// import './Home.module.scss';

const Home = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="home">
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
      <button type="button">{t('home.button')}</button>
    </section>
  );
};

export default Home;
