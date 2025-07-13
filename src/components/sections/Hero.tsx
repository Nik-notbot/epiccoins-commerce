import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Покупай игровую валюту быстро и безопасно
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Пополни свой игровой баланс в популярных играх. Мгновенная доставка,
            честные цены, гарантия безопасности.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
            >
              <Icon name="Zap" size={20} className="mr-2" />
              Перейти к покупкам
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};