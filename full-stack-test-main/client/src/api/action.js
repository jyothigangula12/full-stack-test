const SERVER_URL = `http://localhost:5000`;
// just added backend point
const get = async (endpoint) => {
  const url = SERVER_URL + endpoint;
  const response = await fetch(url);
  console.log(response);
  if (response.ok) {
    return response.json();
  }
  return null;
};

module.exports = {
  get,
};
