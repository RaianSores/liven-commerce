import { Button, Category, Container, Context, Description, Header, Photograph, Price, Wrapper, Row } from './styles';

interface IProductCard {
    id: string;
    title: string;
    category: string;
    description: string;
    price: number;
    image: string;
    amount: number;
}

export const ProductCard = ({ title, category, description, price, image }: IProductCard) => {
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
                    <Button>Adicionar ao carrinho</Button>
                    <Button>Remover do carrinho</Button>
                </Wrapper>
            </Context>
        </Container>
    );
};
