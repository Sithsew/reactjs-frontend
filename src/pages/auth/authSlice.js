

export function isAuthenticated() {
  return !!(localStorage.getItem('token') && localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null)
}

export function getUserName() {
  return localStorage.getItem('username');
}

export function setUserDetails(token, username) {
  localStorage.setItem('token', token);
  localStorage.setItem('username', username);
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
}

// const PrivateRoute = ({ children }) => {
//   return isAuthenticated() ? children : <Navigate to="/signin" />;
// };

// export default PrivateRoute;

