import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
// import './About.module.scss';

const About = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className={'container'}>
        <h1>{t('about.title').toUpperCase()}</h1>
        <p>{t('about.description')}</p>
        <button type="button">{t('about.button').toUpperCase()}</button>
      </div>
    </section>
  );
};

export default About;
