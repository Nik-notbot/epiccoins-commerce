import { Product } from "@/types/product";

export const calculatePrice = (product: Product, amount: number): number => {
  if (!product || amount <= 0) return 0;

  // Находим наиболее выгодный пакет для заданного количества
  const sortedPackages = [...product.packages].sort(
    (a, b) => a.amount - b.amount,
  );
  let totalPrice = 0;
  let remainingAmount = amount;

  for (let i = sortedPackages.length - 1; i >= 0; i--) {
    const pkg = sortedPackages[i];
    const packageCount = Math.floor(remainingAmount / pkg.amount);
    if (packageCount > 0) {
      totalPrice += packageCount * pkg.price;
      remainingAmount -= packageCount * pkg.amount;
    }
  }

  // Для оставшегося количества используем базовую цену
  if (remainingAmount > 0) {
    totalPrice += Math.ceil(remainingAmount * product.basePrice);
  }

  return totalPrice;
};
