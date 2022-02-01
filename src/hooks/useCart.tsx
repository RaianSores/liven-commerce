import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";

import { api } from '../services/api'
import { IProduct } from "../types/types";

interface ICartProviderProps {
    children: ReactNode;
};

interface IUpdateProductAmount {
    productId: number;
    amount: number;
};

interface ICartContextData {
    cart: IProduct[];
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => void;
    updateProductAmount: ({ productId, amount }: IUpdateProductAmount) => void;
}

const CartContext = createContext<ICartContextData>({} as ICartContextData);

export function CartProvider({ children }: ICartProviderProps) {
    const [cart, setCart] = useState<IProduct[]>(() => {
        const storagedCart = localStorage.getItem('@LiveCommerce:cart');

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

     //Adcionar produto no carrinho
    const addProduct = async (productId: number) => {
 
        try {
            const productAlreadyExists = cart.find(
                product => product.id === productId
            );

            if (productAlreadyExists) {
                const { amount: productAmount } = productAlreadyExists;

                const updatedAmountCartProduct = cart.map(product => {
                    return product.id === productId
                        ? { ...product, amount: productAmount + 1 }
                        : product;
                });

                setCart(updatedAmountCartProduct);

                localStorage.setItem(
                    '@LivenCommerce:cart',
                    JSON.stringify(updatedAmountCartProduct)
                );

                return;
            }

            const { data: productData } = await api.get<IProduct>(`products/${productId}`);

            const cartWithNewProduct = [...cart, { ...productData, amount: 1 }];

            setCart(cartWithNewProduct);

            localStorage.setItem(
                '@LivenCommerce:cart',
                JSON.stringify(cartWithNewProduct)
            );
        } catch {
            toast.error('Erro na adição do produto');
        }
    };

    //Atualizar produto no carrinho
    const updateProductAmount = async ({
        productId,
        amount
    }: IUpdateProductAmount) => {
        try {
            if (amount < 1) return;

            const productAlreadyExists = cart.find(
                product => product.id === productId
            );

            if (!productAlreadyExists) throw Error();

            const updatedAmountCartProduct = cart.map(product => {
                return product.id === productId ? { ...product, amount } : product;
            });

            setCart(updatedAmountCartProduct);

            localStorage.setItem(
                '@RocketShoes:cart',
                JSON.stringify(updatedAmountCartProduct)
            );
        } catch {
            toast.error('Erro na alteração de quantidade do produto');
        }
    };

    //Remover produto do carrinho
    const removeProduct = (productId: number) => {
        try {
            const productAlreadyExists = cart.find(
                product => product.id === productId
            );

            if (!productAlreadyExists) throw Error();

            const filteredCart = cart.filter(product => product.id !== productId);

            setCart(filteredCart);

            localStorage.setItem('@RocketShoes:cart', JSON.stringify(filteredCart));
        } catch {
            toast.error('Erro na remoção do produto');
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addProduct, removeProduct, updateProductAmount }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default function useCart(): ICartContextData {
    const context = useContext(CartContext);

    return context;
}
