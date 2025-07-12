import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Product } from "@/types/product";
import { calculatePrice } from "@/utils/pricing";

interface ProductCardProps {
  product: Product;
  selectedAmount: number;
  onAmountChange: (amount: number) => void;
}

export const ProductCard = ({
  product,
  selectedAmount,
  onAmountChange,
}: ProductCardProps) => {
  const updateAmount = (amount: number) => {
    onAmountChange(Math.max(0, amount));
  };

  return (
    <Card className="border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.gradient} flex items-center justify-center`}
          >
            <Icon name={product.icon} size={24} className="text-white" />
          </div>
          <div>
            <CardTitle className="text-xl">{product.name}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Калькулятор валюты */}
        <div className="mb-6 p-4 rounded-lg bg-muted/30 border">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Icon name="Calculator" size={16} />
            Калькулятор валюты
          </h4>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateAmount(selectedAmount - 100)}
                className="h-8 w-8 p-0"
              >
                <Icon name="Minus" size={14} />
              </Button>

              <div className="flex-1">
                <Input
                  type="number"
                  placeholder="Введите количество"
                  value={selectedAmount || ""}
                  onChange={(e) => updateAmount(parseInt(e.target.value) || 0)}
                  className="text-center"
                />
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => updateAmount(selectedAmount + 100)}
                className="h-8 w-8 p-0"
              >
                <Icon name="Plus" size={14} />
              </Button>
            </div>

            {selectedAmount > 0 && (
              <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium">
                  {selectedAmount.toLocaleString()} единиц
                </span>
                <span className="text-lg font-bold text-accent">
                  {calculatePrice(product, selectedAmount).toLocaleString()}₽
                </span>
              </div>
            )}

            {selectedAmount > 0 && (
              <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Добавить в корзину
              </Button>
            )}
          </div>
        </div>

        {/* Готовые пакеты */}
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Icon name="Package" size={16} />
            Готовые пакеты
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {product.packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-3 rounded-lg border transition-all duration-200 hover:shadow-md cursor-pointer ${
                  pkg.popular
                    ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                    : "border-border bg-card hover:border-primary/50"
                }`}
                onClick={() => updateAmount(pkg.amount)}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-xs">
                    Популярный
                  </Badge>
                )}
                <div className="text-center">
                  <div className="text-sm font-bold text-foreground">
                    {pkg.amount.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">
                    единиц
                  </div>
                  <div className="text-sm font-bold text-accent">
                    {pkg.price.toLocaleString()}₽
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {(pkg.price / pkg.amount).toFixed(2)}₽/ед
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
