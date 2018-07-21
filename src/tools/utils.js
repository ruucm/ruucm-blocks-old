export const commaPipe = number => {
  if (number != null)
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
