import { format } from 'date-fns';

/* タスク作成日時取得 */
export const useNowDate = () => {
  let d = format(new Date(), 'yy-MM-dd HH:mm');
  return `${d}`;
}
