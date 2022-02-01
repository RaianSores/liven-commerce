import styled, { css } from "styled-components";
import { BsFillCartPlusFill } from "react-icons/bs";

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

export const iconCSS = css`
  position: absolute;
  width: 1.5rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--text-grey-mid);
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: var(--black-color);
  }
`;

export const Button = styled(BsFillCartPlusFill)`
  ${iconCSS}
`;
