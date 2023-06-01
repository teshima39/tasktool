import { formatInTimeZone } from 'date-fns-tz';

export const useNowDate = () => {
  let d = new Date();
  let year = Number(d.getFullYear().toString().slice(-2));
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let dayofweek = d.getDay();

  const dayname = ['日', '月', '火', '水', '木', '金', '土'];

  let hour = d.getHours().toString().padStart(2, '0');
  let minute = d.getMinutes().toString().padStart(2, '0');

  return (formatInTimeZone(d, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss zzz'))
}

