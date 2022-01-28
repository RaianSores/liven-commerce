import { Button, Category, Container, Description, Header, Image, Price, Wrapper } from './styles';

interface IProductCard {
    id: string;
    title: string;
    category: string;
    description: string;
    price: string;
    image: string;
}

export const ProductCard = ({ title, category, description, price, image }: IProductCard) => {
    return (
        <Container>
            <Wrapper>
                <Header>{title}</Header>
                <Description>{description}</Description>
                <Category>{category}</Category>
                <Price>{price}</Price>
                <Button>Adicionar ao carrinho</Button>
            </Wrapper>
        </Container>
    );
};
