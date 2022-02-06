import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10fr 10fr 10fr 10fr;
  gap: 1rem;

  @media screen and (max-width: 1370px) {
    display: grid;
    grid-template-columns: 3fr 3fr;
    gap: 1rem;
  }

  @media screen and (max-width: 750px) {
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 1rem;
  }

  @media screen and (max-width: 650px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Button = styled.button`
  display: inline-block;
  font-size: 2rem;
  padding: 1rem 4rem;
  color: var(--blue);
  background: var(--blue);
  border: none;
  border-radius: 5px;
  transition: 0.2 ease-out;
  &:hover {
    background: var(--text-grey);
    transition: 0.2s ease-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1370px) {
    font-size: 4rem;
    padding: 1rem 4rem;
  }

  @media screen and (max-width: 750px) {
    font-size: 3rem;
    padding: 1rem 4rem;
  }

  @media screen and (max-width: 650px) {
    font-size: 2rem;
    padding: 1rem 4rem;
  }
`;