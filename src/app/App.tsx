import type { ReactElement } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import About from '@/pages/About/About';
import Catalysts from '@/pages/Catalysts/Catalysts';
import Technologies from '@/pages/Technologies/Technologies';
import Contacts from '@/pages/Contacts/Contacts';

import styles from './App.module.scss';
import '../i18n';

const App = (): ReactElement => {
  return (
    <HashRouter>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/catalysts" element={<Catalysts />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
