import { useState } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS } from "@/data/products";
import { SelectedAmounts } from "@/types/product";

export const Products = () => {
  const [selectedAmounts, setSelectedAmounts] = useState<SelectedAmounts>({});

  const updateAmount = (productId: number, amount: number) => {
    setSelectedAmounts((prev) => ({
      ...prev,
      [productId]: amount,
    }));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Популярные игры</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выбери свою игру и пополни баланс всего за несколько кликов
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              selectedAmount={selectedAmounts[product.id] || 0}
              onAmountChange={(amount) => updateAmount(product.id, amount)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
