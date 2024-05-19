import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./authSlice";

const RequireAuth = () => {
  const location = useLocation();

  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default RequireAuth;
