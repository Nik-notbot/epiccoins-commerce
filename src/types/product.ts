export interface ProductPackage {
  amount: number;
  price: number;
  popular: boolean;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  basePrice: number;
  packages: ProductPackage[];
  icon: string;
  gradient: string;
}

export interface SelectedAmounts {
  [key: number]: number;
}
