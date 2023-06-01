import {format} from 'date-fns-tz'

export const useNowDate = () => {
  let d  =format(new Date(), 'yyyy-MM-dd HH:mm', { timeZone: 'UTC' })

  return (`${d}`)
}

