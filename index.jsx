import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import('./file2.js').then(console.log).catch(console.error);

const App = () => <div>Hi</div>;

createRoot(document.querySelector('main')).render(<App />);
