import { Routes, Route } from 'react-router-dom';

import { Home } from './templates/Home';
import { CartItem } from './templates/Cart';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/cart" element={<CartItem />} />
            </Routes>
        </>
    );
};

export default Router;
