const SERVER_URL = `http://localhost:5000`;
// just added backend point
const get = async (endpoint) => {
  const url = SERVER_URL + endpoint;
  const response = await fetch(url);
  console.log(response.ok);
  if (response.ok) {
    return response.json();
  }
  return null;
};

const post = async (endpoint, data, id) => {
  console.log("form Post", SERVER_URL, endpoint, data, id);
  const url = SERVER_URL + endpoint;
  const response = await fetch(url, {
    mode: "no-cors",
    method: "POST",
    credentials: "include",
    headers: {
      /* Accept: "application/json", */
      "Content-Type": "applications/json",
    },
    body: JSON.stringify({
      data: data,
      id: id,
    }),
  });
  console.log(response);
  if (response.ok) {
    return response.json();
  }
  return null;
};

module.exports = {
  get,
  post,
};
