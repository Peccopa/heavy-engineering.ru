import type { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import Home from '@/pages/Home/Home';
import Catalysts from '@/pages/Catalysts/Catalysts';
import About from '@/pages/About/About';
import Contacts from '@/pages/Contacts/Contacts';

import styles from './App.module.scss';
import '../i18n';

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalysts" element={<Catalysts />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
