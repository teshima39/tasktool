import { format } from 'date-fns';

export const useNowDate = () => {
   let  d = format(new Date(), 'yy-MM-dd HH:mm');

  return `${d}`;
}
