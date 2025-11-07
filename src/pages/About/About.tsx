import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
// import './About.module.scss';

const About = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <h1>{t('about.title')}</h1>
      <p>{t('about.description')}</p>
      <button type="button">{t('about.button')}</button>
    </section>
  );
};

export default About;
