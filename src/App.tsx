import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import Router from './routes';
import { GlobalStyles } from './styles/global';
import { Home } from './templates/Home';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Heading />
            <Router />
            <Footer />
        </BrowserRouter>
    );
};

export default App;