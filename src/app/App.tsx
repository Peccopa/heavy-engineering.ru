import type { ReactElement } from 'react';
import './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Contacts from '@/pages/Contacts/Contacts';
import Header from '@/components/Header/Header';

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
