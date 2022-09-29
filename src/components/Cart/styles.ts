import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  background: var(--white-weak);
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Thead = styled.thead`
  th {
    color: var(--text-grey);
    text-align: left;
    padding: 12px;
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  tbody td {
    padding: 12px;
    border-bottom: 1px solid var(--grey-line);
  }
  img {
    height: 100px;
  }
  strong {
    color: var(--text-grey);
    display: block;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid var(--grey-line);
      border-radius: 4px;
      color: var(--text-grey);
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
    svg {
      color: var(--text-grey-mid);
      transition: color 0.2s;
    }
    &:hover {
      svg {
        color: var(--grey-trash-icon)};
      }
    }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: var(--text-grey);
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
