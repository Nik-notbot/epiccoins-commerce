import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

export const OfferModal = () => {
  return (
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
            <h4 className="font-semibold mb-2">1. Стороны договора</h4>
            <p className="text-muted-foreground">Исполнитель: EpicCoins - поставщик услуг по продаже игровой валюты.
Заказчик: физическое или юридическое лицо, принимающее условия данной оферты и оплачивающее услуги исполнителя.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">2. Предмет договора</h4>
            <p className="text-muted-foreground">
              Исполнитель обязуется предоставить Заказчику игровую валюту в
              соответствии с выбранным пакетом, а Заказчик обязуется принять и
              оплатить услуги.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">3. Порядок оплаты</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Оплата производится до предоставления услуги</li>
              <li>• Принимаются банковские карты, электронные кошельки</li>
              <li>• Возврат средств возможен в течение 14 дней</li>
              <li>• Цены указаны в российских рублях</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">4. Доставка валюты</h4>
            <p className="text-muted-foreground">
              Игровая валюта доставляется на указанный игровой аккаунт в течение
              15 минут после подтверждения оплаты. В случае технических проблем
              срок может быть увеличен до 24 часов.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">5. Ответственность сторон</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Исполнитель гарантирует качество и легальность валюты</li>
              <li>
                • Заказчик несет ответственность за корректность данных аккаунта
              </li>
              <li>
                • Стороны освобождаются от ответственности при форс-мажоре
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">6. Условия возврата</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• <strong>Сроки подачи заявления:</strong> в течение 14 дней с момента оплаты</li>
              <li>• <strong>Основания для возврата:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>- Услуга не оказана в полной мере</li>
                  <li>- Валюта не поступила на игровой аккаунт</li>
                  <li>- Технические проблемы, препятствующие доставке</li>
                  <li>- Ошибка в размере или типе валюты</li>
                  <li>- Отказ от услуги до начала её оказания</li>
                </ul>
              </li>
              <li>• <strong>Сроки возврата:</strong> в течение 5-10 рабочих дней с момента подачи заявления</li>
              <li>• <strong>Контакты для возврата:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>- Email: alamakduetni4@gmail.com</li>
                  <li>- Телефон: +7 (996) 325-24-23</li>
                  <li>- Время обработки заявок: 24/7</li>
                </ul>
              </li>
              <li>• <strong>Способ возврата:</strong> возврат осуществляется на карту или кошелек, с которого поступил платеж</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">7. Контактная информация</h4>
            <div className="text-muted-foreground space-y-1">
              <p>Email: alamakduetni4@gmail.com
</p>
              <p>Телефон: +7 (996) 325-24-23</p>
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
  );
};