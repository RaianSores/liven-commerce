import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10fr 10fr 10fr 10fr;
  gap: 1rem;

  @media screen and (max-width: 750px) {
    display: grid;
    grid-template-columns: 5fr 5fr;
    gap: 1rem;
  }

  @media screen and (max-width: 650px) {
    display: grid;
    grid-template-columns: 5fr;
    gap: 1rem;
  }
`;

export const Button = styled.button`
  font-size: 5rem;
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
`;
