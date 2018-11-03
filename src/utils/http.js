const requestHeaders = () => ({
  Authorization: "Bearer " + localStorage.getItem("token") || ""
});

const authService = response => {
  if (response.status === 401) {
    localStorage.setItem("authenticated", false);
    localStorage.removeItem("token");
    throw { authenticated: false };
  } else {
    return response;
  }
};

class HTTP {
  static get(url) {
    return fetch(url, {
      method: "GET",
      headers: { ...requestHeaders() }
    })
      .then(authService)
      .then(response => {
        return response.json();
      });
  }

  static put(url, data) {
    return fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...requestHeaders()
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  static del(url, data = {}) {
    return fetch(url, {
      method: "DELETE",
      headers: { ...requestHeaders() },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  static post(url, data) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...requestHeaders()
      },
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
      headers: { ...requestHeaders() },
      body: formData
    }).then(response => response.json());
  }
}

export default HTTP;
