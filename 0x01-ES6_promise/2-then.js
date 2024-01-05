export default function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      console.log('Got a response from the API');
      const result = {
        status: 200,
        body: 'success',
      };
      return result;
    })
    .catch((error) => {
      console.log('Got a response from the API');
      const emptyError = new Error();
      return emptyError;
    });
}
