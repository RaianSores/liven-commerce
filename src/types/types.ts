export interface IProduct {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
  amount: number;
}

export interface ISidebar {
  isOpen: boolean;
  toggle: () => void;
}

export interface IButton {
  disabled?: boolean;
  text: string;
  onClick?: () => void;
}

type LoadingType = "balls";

type ColorType = "black";
export interface ILoading {
  color?: ColorType;
  height?: any;
  width?: any;
  type?: LoadingType;
}
