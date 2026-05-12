export const diffBetweenTwoDatesInMinutes = (oldestDate: number, newestDate: number) => {
  return Math.floor((oldestDate - newestDate) / (1000 * 60 ))
}