import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

export const PrivacyModal = () => {
  return (
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
            <h4 className="font-semibold mb-2">1. Общие положения</h4>
            <p className="text-muted-foreground">
              Настоящая политика обработки персональных данных составлена в
              соответствии с требованиями Федерального закона от 27.07.2006
              №152-ФЗ «О персональных данных» и определяет порядок обработки
              персональных данных и меры по обеспечению безопасности
              персональных данных.
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
              <li>• Данные платежных систем (в зашифрованном виде)</li>
              <li>• IP-адрес и данные браузера</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">
              4. Права субъекта персональных данных
            </h4>
            <p className="text-muted-foreground">
              Вы имеете право получать информацию, касающуюся обработки ваших
              персональных данных, а также требовать уточнения, блокирования или
              уничтожения персональных данных.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">5. Безопасность данных</h4>
            <p className="text-muted-foreground">
              Мы применяем технические и организационные меры для защиты
              персональных данных от неправомерного доступа, изменения,
              раскрытия или уничтожения.
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
  );
};
