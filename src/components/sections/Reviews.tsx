import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    name: "Александр",
    game: "Fortnite",
    rating: 5,
    text: "Отличный сервис! V-bucks пришли через 5 минут после оплаты. Рекомендую!",
    avatar: "🚀",
  },
  {
    id: 2,
    name: "Мария",
    game: "Roblox",
    rating: 5,
    text: "Покупаю Робуксы уже не первый раз. Всё честно и быстро. Цены лучше, чем в официальном магазине.",
    avatar: "🎉",
  },
  {
    id: 3,
    name: "Дмитрий",
    game: "Fortnite",
    rating: 5,
    text: "Поддержка ответила в телеграме за 2 минуты и помогла с покупкой. Очень доволен!",
    avatar: "🎮",
  },
  {
    id: 4,
    name: "Катя",
    game: "Roblox",
    rating: 5,
    text: "Калькулятор очень удобный - можно посчитать любое количество. Платила картой, всё прошло гладко.",
    avatar: "🌟",
  },
];

export const Reviews = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={`${i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Читайте отзывы реальных покупателей, которые уже оценили наш сервис
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-xl mr-3">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {review.game}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">{renderStars(review.rating)}</div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Icon name="Users" size={20} />
            <span className="text-lg font-medium">
              Более <span className="text-accent font-bold">10,000+</span>{" "}
              довольных клиентов
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
