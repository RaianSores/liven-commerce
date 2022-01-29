/*import { appendFile } from "fs";
import { createContext, ReactNode, useContext, useState } from "react";

import { IProduct, Stock } from '../components/Product/types';
import { api } from '../services/api'


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

export function CartProvider({ children }: ICartProviderProps){
    const [cart, setCart] = useState<IProduct[]>(() => {
      const storagedCart = localStorage.getItem('@RocketShoes:cart');
  
      if (storagedCart) {
        return JSON.parse(storagedCart);
      }
  
      return [];
    });

    const addProduct = async (productId: number) => {
        try{
            const productAlreadyExists = cart.find(
                product => product.id === productId
            );

            if(productAlreadyExists) {
                const { amount: productAmount } = productAlreadyExists;

                //const { data: stock } = await api.get()
            }
        }
    }
}*/
import React from 'react';

export const useCart = () => {
  return <div></div>;
};
