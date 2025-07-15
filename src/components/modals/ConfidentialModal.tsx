import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

export const ConfidentialModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-xs">
          <Icon name="Shield" size={14} className="mr-1" />
          Конфиденциальность
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon name="Shield" size={20} />
            Политика конфиденциальности
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">1. Общие положения</h4>
            <p className="text-muted-foreground">
              Настоящая Политика конфиденциальности регулирует порядок обработки
              и использования персональных данных пользователей сервиса EpicCoins.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">2. Какие данные мы собираем</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Имя и контактную информацию</li>
              <li>• Данные игрового аккаунта</li>
              <li>• Информацию о платежах</li>
              <li>• Техническую информацию об устройстве</li>
              <li>• История покупок и предпочтения</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">3. Цели обработки данных</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Предоставление услуг по продаже игровой валюты</li>
              <li>• Обработка платежей и возвратов</li>
              <li>• Техническая поддержка пользователей</li>
              <li>• Улучшение качества сервиса</li>
              <li>• Предотвращение мошенничества</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">4. Передача данных третьим лицам</h4>
            <p className="text-muted-foreground">
              Мы не передаем ваши персональные данные третьим лицам без вашего
              согласия, за исключением случаев, предусмотренных законодательством
              или необходимых для предоставления услуг.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">5. Безопасность данных</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Шифрование данных при передаче</li>
              <li>• Защищенные серверы для хранения</li>
              <li>• Регулярные проверки безопасности</li>
              <li>• Ограниченный доступ сотрудников к данным</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">6. Ваши права</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Доступ к своим персональным данным</li>
              <li>• Исправление неточных данных</li>
              <li>• Удаление персональных данных</li>
              <li>• Отзыв согласия на обработку</li>
              <li>• Перенос данных</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">7. Cookies и аналитика</h4>
            <p className="text-muted-foreground">
              Мы используем файлы cookie для улучшения работы сайта и анализа
              поведения пользователей. Вы можете управлять настройками cookie
              в своем браузере.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">8. Контактная информация</h4>
            <div className="text-muted-foreground space-y-1">
              <p>По вопросам конфиденциальности:</p>
              <p>Email: privacy@epiccoins.ru</p>
              <p>Телефон: +7 (996) 325-24-23</p>
            </div>
          </div>

          <div className="bg-muted/50 p-3 rounded-lg">
            <p className="text-xs text-muted-foreground">
              Последнее обновление: 12 июля 2024 г. | Версия 1.3
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};