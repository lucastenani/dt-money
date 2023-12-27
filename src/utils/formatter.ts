export const dateFormatter = new Intl.DateTimeFormat('us')

export const priceFormatter = new Intl.NumberFormat('us', {
  style: 'currency',
  currency: 'USD',
})
