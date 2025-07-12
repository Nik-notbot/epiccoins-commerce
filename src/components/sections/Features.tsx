import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Zap",
    title: "Мгновенная доставка",
    description: "Получи валюту на аккаунт за считанные минуты",
  },
  {
    icon: "Shield",
    title: "100% безопасность",
    description: "Все транзакции защищены и проходят проверку",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description: "Наша команда всегда готова помочь",
  },
];

export const Features = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Почему выбирают нас</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Icon
                  name={feature.icon}
                  size={24}
                  className="text-primary-foreground"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
