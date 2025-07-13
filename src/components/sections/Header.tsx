import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="relative flex items-center justify-between">
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

          <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Товары
            </Button>
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              О нас
            </Button>
          </nav>

          <div></div>
        </div>
      </div>
    </header>
  );
};