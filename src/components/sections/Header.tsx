import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
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
        </div>
      </div>
    </header>
  );
};