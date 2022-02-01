export interface IProduct {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
  amount: number;
}

export interface IButton {
  disabled: boolean;
  text: string;
  onClick: () => void;
}