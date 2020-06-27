// ten minutes
const ttl = 600000;

function get(key) {
  const item = localStorage.getItem(key);
  if (item) {
    const jsonItem = JSON.parse(item);
    if (
      jsonItem.date &&
      Date.parse(jsonItem.date) > new Date().getTime() - ttl
    ) {
      return jsonItem.data;
    }
  }
  return undefined;
}

function put(key, data) {
  localStorage.setItem(
    key,
    JSON.stringify({
      date: new Date(),
      data
    })
  );
}

export default { get, put };
