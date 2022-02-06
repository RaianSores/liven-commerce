import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { CartProvider } from './hooks/useCart';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <GlobalStyles />
                <Heading />
                <Router />
                <Footer />
            </CartProvider>
        </BrowserRouter>
    );
};

export default App;