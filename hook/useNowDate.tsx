import {  getDate, getMonth, getYear } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export const useNowDate = () => {
  let d = utcToZonedTime(new Date(), 'UTC');


  return (`${d}`)
}

