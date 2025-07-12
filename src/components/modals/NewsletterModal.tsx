import { Button } from "@/components/ui/button";
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

export const NewsletterModal = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
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
            Подпишитесь на нашу рассылку, чтобы первыми узнавать о новых играх,
            акциях и специальных предложениях.
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
              <Label htmlFor="newsletter-consent" className="text-sm">
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
  );
};
