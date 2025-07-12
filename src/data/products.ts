import { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Fortnite V-bucks",
    description: "Официальная внутриигровая валюта Fortnite",
    basePrice: 0.8,
    packages: [
      { amount: 1000, price: 799, popular: false },
      { amount: 2800, price: 1999, popular: true },
      { amount: 5000, price: 3499, popular: false },
      { amount: 13500, price: 7999, popular: false },
    ],
    icon: "Trophy",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    name: "Roblox Робуксы",
    description: "Официальная валюта платформы Roblox",
    basePrice: 0.87,
    packages: [
      { amount: 400, price: 349, popular: false },
      { amount: 800, price: 699, popular: true },
      { amount: 1700, price: 1399, popular: false },
      { amount: 4500, price: 3499, popular: false },
    ],
    icon: "Gamepad2",
    gradient: "from-green-600 to-blue-600",
  },
];
