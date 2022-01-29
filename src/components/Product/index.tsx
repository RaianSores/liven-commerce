import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCard } from './ProductCard';
import { Button, Container } from './styles';
interface Item {
    id: string;
    title: string;
    category: string;
    description: string;
    price: number;
    image: string;
}


export const Product: React.FC = () => {
    const [products, setProducts] = useState<Item[]>([]);
    const [allProducts, setAllProducts] = useState<Item[]>([]);
    const [page, setPage] = useState(0);
    const [productsPerPage] = useState(6);

    useEffect(() => {
        const loadProducts = async (page: any, productsPerPage: any) => {
            try {
                const response = await axios.get<Item[]>('https://fakestoreapi.com/products');
                setProducts(response.data.slice(page, productsPerPage));
                setAllProducts(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error + "Alguma coisa deu ruim...");
            }
        };
        loadProducts(0, productsPerPage);
    }, [productsPerPage]);

    const loadMoreProducts = () => {
        const nextPage = page + productsPerPage;
        const nextProduct = allProducts.slice(nextPage, nextPage + productsPerPage);
        products.push(...nextProduct);

        setProducts(products);
        setPage(nextPage);
    };

    const noMoreProducts = page + productsPerPage >= allProducts.length;

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
            <div>
                <Button onClick={loadMoreProducts} disabled={noMoreProducts} />
            </div>
        </Container>
    );
};
