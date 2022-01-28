import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  position: relative;
  flex-direction: column;
  background: red;
`;

export const Header = styled.div`
  position: relative;
  z-index: 9999;
  width: 100%;
  padding: 1rem 2rem;
  background: var(--black-color);
`;
