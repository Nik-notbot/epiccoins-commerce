import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon
                name="Coins"
                size={20}
                className="text-primary-foreground"
              />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EpicCoins
            </h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary"
            >
              Товары
            </Button>
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary"
            >
              О нас
            </Button>
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary"
            >
              Поддержка
            </Button>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
