import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <img src="https://i.ibb.co/KqbNWR4/giffy.webp" alt="" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default PrivateRoutes;
