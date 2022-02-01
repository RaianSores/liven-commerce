import useCart from '../../../hooks/useCart';

import { IProduct } from '../../../types/types';

import { Category, Container, Context, Description, Header, Photograph, Price, Wrapper, Row, Button } from './styles';

export const ProductCart = ({ title, category, description, price, image, id }: IProduct) => {
    const { addProduct } = useCart();

    function handleAddProduct(id: number) {
        addProduct(id)
    }

    return (
        <Container>
            <Context>
                <Wrapper>
                    <Row>
                        <Header>{title}</Header>
                    </Row>
                    <Photograph src={image} alt={title} />
                    <Description>{description}</Description>
                    <Category>{category}</Category>
                    <Price>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(price)}</Price>
                    <Row>
                        <Button onClick={() => handleAddProduct(id)} />
                    </Row>
                </Wrapper>
            </Context>
        </Container>
    );
};