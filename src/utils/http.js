class HTTP {
  static get(url) {
    return fetch(url, {
      method: "GET"
    }).then(response => {
      return response.json();
    });
  }

  static put(url, data) {
    return fetch(url, {
      method: "PUT",
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  static del(url, data = {}) {
    return fetch(url, {
      method: "DELETE",
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  static post(url, data) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  static upload(url, data) {
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    return fetch(url, {
      method: "POST",
      body: formData
    }).then(response => response.json());
  }
}

export default HTTP;
