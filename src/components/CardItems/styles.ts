import styled from "styled-components";

import { HiOutlineHeart } from "@react-icons/all-files/hi/HiOutlineHeart";
import { HiOutlineCheck } from "@react-icons/all-files/hi/HiOutlineCheck";
import { HiOutlineShieldCheck } from "@react-icons/all-files/hi/HiOutlineShieldCheck";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10fr 10fr;
  gap: 1rem;
  background: var(--white-weak);
  border-radius: 4px;

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

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
  align-items: center;
  align-content: center;
  align-self: flex-center;
  gap: 1rem;

  > h1 {
    width: 100%;
    font-size: 26px;
    font-weight: 600;
  }

  > p {
      margin-left: 1px;
      color: var(--text-grey);
      font-size: 15px;
      font-family: 400;
  }

  @media screen and (max-width: 750px) {
    padding-left: 2rem;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  width: 28px;
  height: 28px;
  color: var(--red);
  margin-left: 16px;
  cursor: pointer;
`;

export const DispatchTag = styled.div`
  margin-top: 12px;
  color: var(--gold-dark);
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
`;

export const PriceCard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 44px;
  font-weight: 800;
  .fraction {
    margin-left: 8.8px;
    color: var(--white);
  }
  .cents {
    font-size: 20px;
    padding-top: 3px;
    margin-left: 1px;
  }
`;

export const InstallmentsInfo = styled.div`
  font-size: 15px;
  color: var(--white);
  font-weight: 800;
  margin-top: 2px;
  margin-left: 12px;
`;

export const StockStatus = styled.div`
  margin-top: 24px;
  font-size: 18px;
`;

export const MethodCard = styled.div`
  margin-top: 10px;
  display: flex;
  padding-left: 16%;
  padding-right: 5rem;
  border-radius: 4px;
  margin-right: 15%;
  > div {
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    .title {
      color: var(--green);
      font-size: 14px;
    }
  }
`;

export const CheckIcon = styled(HiOutlineCheck)`
  width: 20px;
  height: 20px;
  color: var(--text-grey);
  flex-shrink: 0;
`;

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

export const Benefits = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  > li {
    display: flex;
    p {
      margin-left: 10px;
      color: var(--text-grey);
      font-size: 14px;
    }
  }
`;

export const ShieldIcon = styled(HiOutlineShieldCheck)`
  width: 20px;
  height: 20px;
  color: var(--text-grey);
  flex-shrink: 0;
`;

export const Photograph = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  min-width: 15rem;
  width: 15rem;
  margin-right: 1rem;
  margin-left: 1rem;
  border-radius: 10%;
  border: 1px solid var(--border-grey);
  background-color: var(--bg-grey);
  margin-right: 1rem;
  margin-left: 5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  max-width: 10%;
  cursor: pointer;

  @media screen and (max-width: 750px) {
    height: 60%;
    min-width: 60%;
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  tbody td {
    padding: 12px;
    border-bottom: 1px solid var(--grey-line);
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
    padding: 1rem;
    svg {
      color: var(--text-grey-mid);
      transition: color 0.2s;
      margin: 0.5rem 0.5rem 0.5rem;
    }
    &:hover {
      svg {
        color: var(--grey-trash-icon)};
      }
    }

    @media screen and (max-width: 750px) {
      padding-left: 6rem;
      padding-right: 6rem;
  }
`;

export const ProductTablePrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--green);
  border-radius: 0.9rem;
  padding: 1rem;
`;