import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { Product } from "@/types/product";

interface PurchaseFormProps {
  product: Product;
  selectedAmount: number;
  onClose: () => void;
  onSubmit: (data: { nickname: string; email: string }) => void;
}

export const PurchaseForm = ({ product, selectedAmount, onClose, onSubmit }: PurchaseFormProps) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || !email.trim()) return;

    setIsSubmitting(true);
    
    try {
      await onSubmit({ nickname: nickname.trim(), email: email.trim() });
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalCost = selectedAmount * product.basePrice;

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Оформление покупки</h2>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <Icon name="X" size={20} />
        </Button>
      </div>

      <div className="mb-4 p-4 bg-muted rounded-lg">
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.gradient} flex items-center justify-center`}
          >
            <Icon name={product.icon} size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground">
              {selectedAmount} единиц
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">{(selectedAmount * product.basePrice).toFixed(0)}₽</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="nickname">Никнейм в игре</Label>
          <Input
            id="nickname"
            type="text"
            placeholder="Введите ваш никнейм"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Электронная почта</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onClose}
            className="flex-1"
          >
            Отмена
          </Button>
          <Button 
            type="submit" 
            disabled={!nickname.trim() || !email.trim() || isSubmitting}
            className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                Обработка...
              </>
            ) : (
              <>
                <Icon name="CreditCard" size={16} className="mr-2" />
                Оплатить {totalCost}₽
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};