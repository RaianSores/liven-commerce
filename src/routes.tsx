import { Routes, Route } from 'react-router-dom';

import { Home } from './templates/Home';
import { CartItem } from './templates/Cart';
import { Checkout } from './templates/Checkout';
import { CardItems } from './templates/CardItems';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/cart" element={<CartItem />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/cardItems" element={<CardItems />} />
            </Routes>
        </>
    );
};

export default Router;
