export function removeHtml(str) {
  const regex = new RegExp(/<\/?[^>]+(>|$)/, "ig");
  const cleaned = str.replaceAll(regex, "");
  return cleaned;
}

export function parseDate(str) {
  const arr = str.split(" ");
  const str_date = `${arr[2]} ${arr[1]} ${arr[3]}`;
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long",
  };
  return new Date(str_date).toLocaleDateString("en-us", options);
}
