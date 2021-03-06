import { useCallback, useEffect, useState } from 'react';

import { api } from '../../services/api';
import { IProduct } from '../../types/types';
import { Loading } from '../Loading';
import { ProductCard } from './ProductCard';
import { Button } from '../Button/index'

import { Container } from './styles';

export const Product = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [allProducts, setAllProducts] = useState<IProduct[]>([]);
    const [page, setPage] = useState(0);
    const [productsPerPage] = useState(6);

    //Requisição API Fake 
    const loadProducts: any = async () => {
        try {
            const { data } = await api.get<IProduct[]>('products');
            return data
        } catch (error) {
            console.log(error + "Alguma coisa deu ruim...");
        }
    };

    //Lidando com os itens que vão renderizar
    const handleLoadProducts = useCallback(async (page: number, productsPerPage: number) => {
        const productsData = await loadProducts();

        setProducts(productsData.slice(page, productsPerPage));
        setAllProducts(productsData)
    }, []);

    useEffect(() => {
        handleLoadProducts(0, productsPerPage);
    }, [handleLoadProducts, productsPerPage]);

    //Loanding caso a requisção ainda não tenha sido completada retorna loading...
    if (!products.length) return <Loading />

    //Função de paginação
    const loadMoreProducts = () => {
        const nextPage = page + productsPerPage;
        const nextProduct = allProducts.slice(nextPage, nextPage + productsPerPage);
        products.push(...nextProduct);

        setProducts(products);
        setPage(nextPage);
    };

    //Verificador de itens para renderizar
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
                <Button text="Load more products" onClick={loadMoreProducts} disabled={noMoreProducts} />
            </div>
        </Container>
    );
};
