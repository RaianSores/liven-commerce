import { Link } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

import { IProduct } from '../../../types/types';
import { formatPrice } from '../../../utils/format';

import { Category, Container, Context, Description, Header, Photograph, Price, Wrapper, Row, Button } from './styles';

export const ProductCard = ({ title, category, description, price, image, id }: IProduct) => {
    const { addProduct } = useCart();

    //Chamando a função de adição compartilhada no hook useCart
    const handleAddProduct = (id: number) => {
        return addProduct(id)
    }

    return (
        <Container>
            <Context>
                <Wrapper>
                    <Row>
                        <Header>{title}</Header>
                    </Row>
                    <Link to="/cardItems">
                        <Photograph 
                            src={image} 
                            alt={title}
                            onClick={() => handleAddProduct(id)} 
                        />
                    </Link>
                    <Description>{description}</Description>
                    <Category>{category}</Category>
                    <Price>{formatPrice(price)}</Price>
                    <Row>
                        <Button onClick={() => handleAddProduct(id)} />
                    </Row>
                </Wrapper>
            </Context>
        </Container>
    );
};