import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCard } from './ProductCard';
import { Container } from './styles';

interface Item {
    id: string;
    title: string;
    category: string;
    description: string;
    price: string;
    image: string;
}

export const Product: React.FC = () => {
    const [products, setProducts] = useState<Item[]>([]);
    const [allProducts, setAllProducts] = useState<Item[]>([]);
    const [page, setPage] = useState(0);
    const [productsPerPage] = useState(4);

    useEffect(() => {
        const loadProducts = async () => {
            axios.get<Item[]>('https://fakestoreapi.com/products')
                .then(response => {
                    setProducts(response.data)
                })
                .catch(err => console.log(err))
        };
        loadProducts()
    }, []);

    return (
        <Container>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    id={product.id}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                />
            ))}
        </Container>
    );
};
