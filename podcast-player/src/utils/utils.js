export function removeHtml(html) {
  const cleanedDoc = new DOMParser().parseFromString(html, "text/html");
  return cleanedDoc.body.textContent || "";
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
