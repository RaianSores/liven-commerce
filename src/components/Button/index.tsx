import { IButton } from '../../types/types';

import { Container } from './styles'

export const Button = ({ text, onClick, disabled = false }: IButton) => (
    <Container onClick={onClick} disabled={disabled}>
        {text}
    </Container>
);