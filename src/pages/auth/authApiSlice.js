const baseUrl = "http://localhost:3500/api";

const fetchJson = async (url, options) => {
  const response = await fetch(baseUrl + url, options);
  return response.json();
};

export const login = async (credentials) => {
  return fetchJson("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const register = async (userData) => {
  return fetchJson("/auth/signup", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
