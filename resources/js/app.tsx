import '../css/app.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Blackjack from './components/Blackjack';

ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <Blackjack />
    </React.StrictMode>,
);
