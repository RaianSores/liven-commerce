import styled from "styled-components";

export const Container = styled.div`
  min-height: 5vh;
  padding: 1rem calc((85vw - 1300px) / 10);
  background: var(--black-color);
  color: var(--grey-line);
  border-radius: 5px;
  grid-row-end: 1;
`;

export const ProductCard = styled.div`
    margin: flex;
    line-height: 2;
    width: 350px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const Header = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
`;

export const Description = styled.h2`
    font-weight: 700;
    font-size: 14px;
    color: var(--red);
`;

export const Image = styled.img`
    height: 20rem;
    min-width: 15rem;
    max-width: 10%;
    box-shadow: 8px 8px var(--gold-dark);
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const Category = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    padding: 1rem;
`;

export const Price = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
`;

export const Button = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: var(--red);
    color: #fff;
    border-radius: 5px;
    transition: 0.2 ease-out;
    &:hover {
        background: var(--gold-dark);
        transition: 0.2s ease-out;
        cursor: pointer;
        color: var(--black-color);
    }
`;