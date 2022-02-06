import React from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline
} from 'react-icons/md';

import useCart from '../../hooks/useCart';
import { IProduct } from '../../types/types';
import { formatPrice } from '../../utils/format'
import { Button } from '../Button';

import { Container, ProductTable, Thead, Total } from './styles';

export const ProductCart = () => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount)
  }));

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal += product.price * product.amount;
    }, 0)
  );

  function handleProductIncrement(product: IProduct) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 })
  }

  function handleProductDecrement(product: IProduct) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 })
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }

  return (
    <Container>
      <ProductTable>
        <Thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </Thead>
        <tbody>
          {cartFormatted.map(product => (
            <tr key={product.id} data-testid="product">
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    disabled={product.amount <= 1}
                    onClick={() => handleProductDecrement(product)}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input
                    type="text"
                    readOnly
                    value={product.amount}
                  />
                  <button
                    type="button"
                    onClick={() => handleProductIncrement(product)}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <Button text="Finalizar pedido" disabled={false} onClick={() => total}/>
        
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};