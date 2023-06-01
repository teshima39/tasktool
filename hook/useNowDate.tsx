import format from 'date-fns/format'

export const useNowDate = () => {
  const now = new Date()
  const date = format(now, 'yyyy/MM/dd')


  return (`${date}`)
}

