import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
// import './Contacts.module.scss';

const Contacts = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="contacts">
      <h1>{t('contacts.title')}</h1>
      <p>{t('contacts.description')}</p>
      <button type="button">{t('contacts.button')}</button>
    </section>
  );
};

export default Contacts;
