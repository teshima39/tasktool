import { format } from 'date-fns';

export const useNowDate = () => {
  let d = format(new Date(), 'yyyy-MM-dd HH:mm');

  return `${d}`;
}
