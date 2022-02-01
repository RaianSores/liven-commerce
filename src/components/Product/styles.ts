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

/*
import styled from "styled-components";

export const Container = styled.div`
  min-height: 5vh;
  padding: 0.5rem calc((80vw - 1024px) / 10);
  background: var(--background-principal);
  border-radius: 5px;
`;

export const Context = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
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
  color: var(--black-color);
`;

export const Description = styled.h2`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  color: red;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 1rem;
`;

export const Photograph = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  min-width: 15rem;
  max-width: 10%;

  @media screen and (max-width: 750px) {
    height: 60%;
    min-width: 60%;
    //max-width: 10%;
  }
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
  position: absolute
  font-size: 1rem;
  padding: 1rem 1rem;
  border: none;
  background: var(--blue);
  color: var(--black-color);
  border-radius: 1rem;
  transition: 0.2 ease-out;
  gap: 2rem;

  &:hover {
    background: var(--gold-dark);
    transition: 0.2s ease-out;
    cursor: pointer;
    color: var(--black-color);
  }
  @media screen and (max-width: 750px) {
    font-size: 0.8rem;
    padding: 0.5rem 3rem;
  }

  @media screen and (max-width: 650px) {
    font-size: 0.3rem;
    padding: 0.5rem 1rem;
  }
`;
*/