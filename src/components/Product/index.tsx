import React, { useEffect, useState } from 'react';

import { ProductCard } from './ProductCard';
import { Button, Container } from './styles';

import { api } from '../../services/api';
interface IProduct {
    id: string;
    title: string;
    category: string;
    description: string;
    price: number;
    image: string;
    amount: number;
}


export const Product: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [allProducts, setAllProducts] = useState<IProduct[]>([]);
    const [page, setPage] = useState(0);
    const [productsPerPage] = useState(6);

    //Requisição API Fake 
    useEffect(() => {
        const loadProducts = async (page: any, productsPerPage: any) => {
/*            try {
                const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
                setProducts(response.data.slice(page, productsPerPage));
                setAllProducts(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error + "Alguma coisa deu ruim...");
            }
        };
        
*/    
        const { data } = await api.get('products');
        console.log(data)
        setProducts(data.slice(page, productsPerPage));
        setAllProducts(data)
    }
        loadProducts(0, productsPerPage);
    }, [products, productsPerPage]);
    
    if(!products.length) return <h1>Loading...</h1>

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
                    amount={product.amount}
                />
            ))}
            <div>
                <Button onClick={loadMoreProducts} disabled={noMoreProducts} />
            </div>
        </Container>
    );
};
