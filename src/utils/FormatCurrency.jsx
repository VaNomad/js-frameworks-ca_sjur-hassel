export function formatCurrency(number) {
  const roundedNumber = Math.round(number);
  const formattedCurrency = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "NOK",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(roundedNumber);
  return formattedCurrency;
}
