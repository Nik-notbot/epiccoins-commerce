import Icon from "@/components/ui/icon";
import { NewsletterModal } from "@/components/modals/NewsletterModal";
import { PrivacyModal } from "@/components/modals/PrivacyModal";
import { OfferModal } from "@/components/modals/OfferModal";

const footerSections = [
  {
    title: "Игры",
    links: ["Fortnite", "Roblox", "Minecraft"],
  },
  {
    title: "Поддержка",
    links: ["FAQ", "Контакты", "Помощь"],
  },
  {
    title: "Компания",
    links: ["О нас", "Условия", "Конфиденциальность"],
  },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h5 className="font-semibold mb-3">{section.title}</h5>
              <ul className="space-y-2 text-muted-foreground">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground">
              <p>&copy; 2024 EpicCoins. Все права защищены.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <NewsletterModal />
              <PrivacyModal />
              <OfferModal />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
