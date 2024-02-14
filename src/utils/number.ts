export function formatAmountWithSymbol(num: number, prefix = "") {
  return String(num.toFixed(0))
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    .replace(/(^\d)/, `+${prefix}$1`);
}
