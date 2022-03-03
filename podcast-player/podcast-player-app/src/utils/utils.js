export function removeHtml(str) {
  const regex = new RegExp(/<\/?[^>]+(>|$)/, "ig");
  const cleaned = str.replaceAll(regex, "");
  return cleaned;
}
