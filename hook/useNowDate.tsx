import { format } from 'date-fns';
import ja from "date-fns/locale/ja";

export const useNowDate = () => {
  let d = format(new Date(), 'yy-MM-dd HH:mm', { locale: ja });

  return `${d}`;
}
