import format from 'date-fns/format'

export const useNowDate = () => {
  const now = new Date()
  const date = format(now, 'yy/MM/dd hh:mm')
  return (`${date}`)
}

