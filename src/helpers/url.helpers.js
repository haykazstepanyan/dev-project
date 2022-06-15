export function getUrl() {
  const { protocol } = window.location;
  const { host } = window.location;
  const url = `${protocol}//${host}`;
  return url;
}
