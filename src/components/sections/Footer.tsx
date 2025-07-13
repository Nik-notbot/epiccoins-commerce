import Icon from "@/components/ui/icon";
import { NewsletterModal } from "@/components/modals/NewsletterModal";
import { PrivacyModal } from "@/components/modals/PrivacyModal";
import { OfferModal } from "@/components/modals/OfferModal";
import { ConfidentialModal } from "@/components/modals/ConfidentialModal";

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
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground">
              <p>&copy; 2024 EpicCoins. Все права защищены.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <PrivacyModal />
              <OfferModal />
              <ConfidentialModal />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};