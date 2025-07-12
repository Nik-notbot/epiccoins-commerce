import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Fortnite V-bucks",
      description: "Официальная внутриигровая валюта Fortnite",
      packages: [
        { amount: "1,000", price: "799₽", popular: false },
        { amount: "2,800", price: "1,999₽", popular: true },
        { amount: "5,000", price: "3,499₽", popular: false },
        { amount: "13,500", price: "7,999₽", popular: false },
      ],
      icon: "Trophy",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      id: 2,
      name: "Roblox Робуксы",
      description: "Официальная валюта платформы Roblox",
      packages: [
        { amount: "400", price: "349₽", popular: false },
        { amount: "800", price: "699₽", popular: true },
        { amount: "1,700", price: "1,399₽", popular: false },
        { amount: "4,500", price: "3,499₽", popular: false },
      ],
      icon: "Gamepad2",
      gradient: "from-green-600 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Покупай игровую валюту быстро и безопасно
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Пополни свой игровой баланс в популярных играх. Мгновенная
              доставка, честные цены, гарантия безопасности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
              >
                <Icon name="Zap" size={20} className="mr-2" />
                Перейти к покупкам
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Популярные игры</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выбери свою игру и пополни баланс всего за несколько кликов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.gradient} flex items-center justify-center`}
                    >
                      <Icon
                        name={product.icon}
                        size={24}
                        className="text-white"
                      />
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
                  <div className="grid grid-cols-2 gap-3">
                    {product.packages.map((pkg, index) => (
                      <div
                        key={index}
                        className={`relative p-4 rounded-lg border transition-all duration-200 hover:shadow-md cursor-pointer ${
                          pkg.popular
                            ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                            : "border-border bg-card hover:border-primary/50"
                        }`}
                      >
                        {pkg.popular && (
                          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-xs">
                            Популярный
                          </Badge>
                        )}
                        <div className="text-center">
                          <div className="text-lg font-bold text-foreground">
                            {pkg.amount}
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">
                            единиц
                          </div>
                          <div className="text-lg font-bold text-accent">
                            {pkg.price}
                          </div>
                          <Button
                            size="sm"
                            className="w-full mt-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                          >
                            Купить
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Почему выбирают нас</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Icon
                  name="Zap"
                  size={24}
                  className="text-primary-foreground"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Мгновенная доставка
              </h4>
              <p className="text-muted-foreground">
                Получи валюту на аккаунт за считанные минуты
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Icon
                  name="Shield"
                  size={24}
                  className="text-primary-foreground"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">100% безопасность</h4>
              <p className="text-muted-foreground">
                Все транзакции защищены и проходят проверку
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Icon
                  name="Headphones"
                  size={24}
                  className="text-primary-foreground"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">Поддержка 24/7</h4>
              <p className="text-muted-foreground">
                Наша команда всегда готова помочь
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon
                    name="Coins"
                    size={20}
                    className="text-primary-foreground"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  EpicCoins
                </span>
              </div>
              <p className="text-muted-foreground">
                Лучший сервис для покупки игровой валюты
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Игры</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>Fortnite</li>
                <li>Roblox</li>
                <li>Minecraft</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Поддержка</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>FAQ</li>
                <li>Контакты</li>
                <li>Помощь</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Компания</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>О нас</li>
                <li>Условия</li>
                <li>Конфиденциальность</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 EpicCoins. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
