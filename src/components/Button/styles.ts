import styled from "styled-components";

export const Container = styled.button`
  display: inline-block;
  border: none;
  border-radius: 5px;
  transition: 0.2 ease-out;
  background: var(--blue);

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
  }

  &:disabled {
      cursor: not-allowed;
      background: var(--black-color);
  }
`;