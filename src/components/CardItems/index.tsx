import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline
} from 'react-icons/md';

import useCart from '../../hooks/useCart';
import { IProduct } from '../../types/types';
import { formatPrice } from '../../utils/format'

import {
  Benefits,
  CheckIcon,
  Container,
  HeartIcon,
  PriceCard,
  PriceRow,
  Row,
  ShieldIcon,
  ProductTable,
  Photograph,
  ProductTablePrice,
  MethodCard,
  DispatchTag,
  InstallmentsInfo
} from './styles';

export const CardItem = () => {
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

  const parcelas = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal += product.price * product.amount / 3;
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
      {cartFormatted.map(product => (
        <div key={product.id} data-testid="product">
          <Row>
            <h1>{product.title}</h1>
            <HeartIcon />
          </Row>
          <Photograph src={product.image} alt={product.title} />
          <ProductTable>
            <MethodCard>
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
              <button
                type="button"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <MdDelete size={20} />
              </button>
            </MethodCard>
          </ProductTable>
        </div>
      ))}
      <ProductTablePrice>
        <PriceCard>
          <PriceRow>
            <span className="fraction">{total}</span>
          </PriceRow>
          <InstallmentsInfo> em 3x de {parcelas}</InstallmentsInfo>
        </PriceCard>
        <Row>
          <ShieldIcon />
          <p>
            Compra Garantida, receba o produto que está esperando ou devolvemos seu dinheiro.
          </p>
        </Row>
        <Row>
          <CheckIcon />
          <p>
            Frete grátis! Consulte as opções e condições de entrega.
          </p>
        </Row>
        <Row>
          <DispatchTag>Enviamos para todo Brasil</DispatchTag>
        </Row>
      </ProductTablePrice>
    </Container>
  );
};