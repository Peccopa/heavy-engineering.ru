import type { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Contacts from '@/pages/Contacts/Contacts';
import Header from '@/components/Header/Header';
import styles from './App.module.scss';
import '../i18n';

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
