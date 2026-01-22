import { createRoot } from 'react-dom/client';
import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import App from './App';
import '@/styles/global.scss';
import '../i18n';

const container = document.querySelector('#root');

if (container) {
  const root = createRoot(container);

  const AppWithFade = (): ReactElement => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const handleLoad = (): void => setLoaded(true);
      if (document.readyState === 'complete') {
        setLoaded(true);
      } else {
        window.addEventListener('load', handleLoad);
        return (): void => window.removeEventListener('load', handleLoad);
      }
    }, []);

    return (
      <div className={loaded ? 'fade-in loaded' : 'fade-in'}>
        <App />
      </div>
    );
  };

  root.render(<AppWithFade />);
}
