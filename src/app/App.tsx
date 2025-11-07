import type { ReactElement } from 'react';
import './App.module.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/about">О компании</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>Главная страница</h1>} />
          <Route path="/about" element={<h1>О компании</h1>} />
          <Route path="/contacts" element={<h1>Контакты</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
