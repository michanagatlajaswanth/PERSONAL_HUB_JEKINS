import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import 'remixicon/fonts/remixicon.css';
import Preloader from './components/PreLoader.jsx';

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader/>
    <App />
  </StrictMode>,
);
