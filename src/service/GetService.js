const { REACT_APP_BASIC_AUTH_KEY, REACT_APP_API_URL } = process.env;

const GetService = (url) => {
  return new Promise((resolve, reject) => {
    fetch(`${REACT_APP_API_URL}/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${REACT_APP_BASIC_AUTH_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default GetService;
