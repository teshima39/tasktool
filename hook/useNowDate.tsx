import { format } from 'date-fns';

/* タスク作成日時取得 */
export const useNowDate = () => {
  let date = format(new Date(), 'yy年MM月dd日 HH:mm');
  return `${date}`;
}
