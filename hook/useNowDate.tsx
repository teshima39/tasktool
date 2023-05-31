import { utcToZonedTime } from 'date-fns-tz';

export const useNowDate = () => {
  let d = utcToZonedTime(new Date(), 'Asia/Tokyo');
  let year = Number(d.getFullYear().toString().slice(-2));
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let dayofweek = d.getDay();

  const dayname = ['日', '月', '火', '水', '木', '金', '土'];

  let hour = d.getHours().toString().padStart(2, '0');
  let minute = d.getMinutes().toString().padStart(2, '0');

  return (`${year + '年' + month + '月' + day + '日' + '[' + dayname[dayofweek] + ']' + hour + ':' + minute}`)
}

