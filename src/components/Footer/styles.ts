import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  background: var(--black-color);

  p {
    font-size: 1.2rem;
    color: var(--grey-line);
    @media screen and (max-width: 768px) {
      display: flex;
      position: relative;
      z-index: 1;
      font-size: 1rem;
      width: calc(50% - 50px);
    }
  }
`;