export function convertStringToYenNoText(money: string) {
  if (!money) return 0;
  const yenFormat = parseInt(money.toString()).toLocaleString("ja-JP");
  return `${yenFormat}`;
}
