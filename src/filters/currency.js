export function currency(value, currency = '$', fixedNumber = 2) {
  return currency + parseFloat(value).toFixed(fixedNumber)
}
