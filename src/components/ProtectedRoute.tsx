import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface JWTPayload {
  exp: number;
}

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = Cookies.get("JWT");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode<JWTPayload>(token);
    if (decoded.exp * 1000 < Date.now()) {
      Cookies.remove("JWT");
      return <Navigate to="/login" replace />;
    }
  } catch {
    Cookies.remove("JWT");
    return <Navigate to="/login" replace />;
  }
  return children;
}
