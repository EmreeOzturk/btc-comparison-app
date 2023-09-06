export function formattedValue(btc: string) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 8,
    maximumFractionDigits: 8,
  }).format(parseFloat(btc as string));
}
