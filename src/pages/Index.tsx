import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
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

          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-muted-foreground">
                <p>&copy; 2024 EpicCoins. Все права защищены.</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {/* Получение рассылки */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Icon name="Mail" size={14} className="mr-1" />
                      Получение рассылки
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Icon name="Mail" size={20} />
                        Подписка на рассылку
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Подпишитесь на нашу рассылку, чтобы первыми узнавать о
                        новых играх, акциях и специальных предложениях.
                      </p>

                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="newsletter-email">Email адрес</Label>
                          <Input
                            id="newsletter-email"
                            type="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newsletter-consent"
                            checked={isSubscribed}
                            onCheckedChange={setIsSubscribed}
                          />
                          <Label
                            htmlFor="newsletter-consent"
                            className="text-sm"
                          >
                            Я согласен на обработку персональных данных
                          </Label>
                        </div>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg text-sm text-muted-foreground">
                        <h4 className="font-medium mb-2">Что вы получите:</h4>
                        <ul className="space-y-1">
                          <li>• Уведомления о новых играх и валютах</li>
                          <li>• Эксклюзивные скидки и промокоды</li>
                          <li>• Новости индустрии и обновления</li>
                        </ul>
                      </div>

                      <Button
                        className="w-full bg-gradient-to-r from-primary to-accent"
                        disabled={!email || !isSubscribed}
                      >
                        <Icon name="Send" size={16} className="mr-2" />
                        Подписаться
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Обработка ПД */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Icon name="Shield" size={14} className="mr-1" />
                      Обработка ПД
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Icon name="Shield" size={20} />
                        Политика обработки персональных данных
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">
                          1. Общие положения
                        </h4>
                        <p className="text-muted-foreground">
                          Настоящая политика обработки персональных данных
                          составлена в соответствии с требованиями Федерального
                          закона от 27.07.2006 №152-ФЗ «О персональных данных» и
                          определяет порядок обработки персональных данных и
                          меры по обеспечению безопасности персональных данных.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          2. Цели обработки персональных данных
                        </h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Обработка заказов и предоставление услуг</li>
                          <li>• Идентификация пользователей</li>
                          <li>• Связь с пользователями для уведомлений</li>
                          <li>• Улучшение качества предоставляемых услуг</li>
                          <li>• Проведение статистических исследований</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          3. Перечень персональных данных
                        </h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Email адрес</li>
                          <li>• Игровые никнеймы и ID</li>
                          <li>
                            • Данные платежных систем (в зашифрованном виде)
                          </li>
                          <li>• IP-адрес и данные браузера</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          4. Права субъекта персональных данных
                        </h4>
                        <p className="text-muted-foreground">
                          Вы имеете право получать информацию, касающуюся
                          обработки ваших персональных данных, а также требовать
                          уточнения, блокирования или уничтожения персональных
                          данных.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          5. Безопасность данных
                        </h4>
                        <p className="text-muted-foreground">
                          Мы применяем технические и организационные меры для
                          защиты персональных данных от неправомерного доступа,
                          изменения, раскрытия или уничтожения.
                        </p>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          Последнее обновление: 12 июля 2024 г.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Оферта */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Icon name="FileText" size={14} className="mr-1" />
                      Оферта
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Icon name="FileText" size={20} />
                        Публичная оферта
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">
                          1. Общие положения
                        </h4>
                        <p className="text-muted-foreground">
                          Настоящая публичная оферта является официальным
                          предложением ООО «EpicCoins» заключить договор на
                          оказание услуг по продаже игровой валюты.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          2. Предмет договора
                        </h4>
                        <p className="text-muted-foreground">
                          Исполнитель обязуется предоставить Заказчику игровую
                          валюту в соответствии с выбранным пакетом, а Заказчик
                          обязуется принять и оплатить услуги.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          3. Порядок оплаты
                        </h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>
                            • Оплата производится до предоставления услуги
                          </li>
                          <li>
                            • Принимаются банковские карты, электронные кошельки
                          </li>
                          <li>• Возврат средств возможен в течение 14 дней</li>
                          <li>• Цены указаны в российских рублях</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          4. Доставка валюты
                        </h4>
                        <p className="text-muted-foreground">
                          Игровая валюта доставляется на указанный игровой
                          аккаунт в течение 15 минут после подтверждения оплаты.
                          В случае технических проблем срок может быть увеличен
                          до 24 часов.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          5. Ответственность сторон
                        </h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>
                            • Исполнитель гарантирует качество и легальность
                            валюты
                          </li>
                          <li>
                            • Заказчик несет ответственность за корректность
                            данных аккаунта
                          </li>
                          <li>
                            • Стороны освобождаются от ответственности при
                            форс-мажоре
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">
                          6. Контактная информация
                        </h4>
                        <div className="text-muted-foreground space-y-1">
                          <p>Email: support@epiccoins.ru</p>
                          <p>Телефон: +7 (800) 123-45-67</p>
                          <p>Время работы: 24/7</p>
                        </div>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          Дата публикации: 12 июля 2024 г. | Версия 2.1
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
