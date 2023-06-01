import format from 'date-fns/format'

export const useNowDate = () => {
  const now = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
  const date = format(now, 'yy/MM/dd hh:mm')
  return (`${date}`)
}

