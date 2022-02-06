import styled from "styled-components";

export const Container = styled.button`
  display: inline-block;
  font-size: 1rem;
  padding: 0.8rem 3rem;
  color: var(--white);
  background: var(--text-grey-mid);
  border: none;
  border-radius: 5px;
  transition: 0.2 ease-out;
  
  &:hover {
    background: var(--text-grey-weak); 
    transition: 0.2s ease-out;
    cursor: pointer;
  }

  @media screen and (max-width: 750px) {
    font-size: 1rem;
    padding: 0.7rem 2.5rem;
  }

  @media screen and (max-width: 650px) {
    font-size: 0.8rem;
    padding: 0.7rem 2rem;
  }
`;