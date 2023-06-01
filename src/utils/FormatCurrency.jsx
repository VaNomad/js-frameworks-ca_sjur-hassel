
const CURRENCY_FORMATTER = new Intl.NumberFormat("de-DE", {
  currency: "NOK", style: "currency"
});

export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number)
}