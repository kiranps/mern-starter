export const authenticate = () =>
  fetch("/data.json")
    .then(data => {
      return data.json();
    })
    .then(data => {
      return data;
    });
