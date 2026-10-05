import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Automatically unregister any stale dev service workers to prevent unexpected caching or '<' syntax errors
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const reg of registrations) {
      if (reg.active?.scriptURL.includes('dev-sw') || import.meta.env.DEV) {
        reg.unregister();
      }
    }
  }).catch(() => {});
}

createRoot(document.getElementById('root')!).render(<App />);
