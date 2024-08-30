import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { RootState } from "../../../../redux/store";
import { useEffect } from "react";
import { logout } from "../../../../redux/features/slices/authSlice";

const AdminRoute: React.FC = () => {

  const user = useSelector((state: RootState) => state.auth.user);
  
  
  const isAdmin = user?.role === 'admin';
  const navigate = useNavigate();


  useEffect(() => {
    if (!isAdmin) {
      logout()
      navigate('/login');
    }
  }, [isAdmin, navigate]);

  return isAdmin ? <Outlet /> : null;
};

export default AdminRoute;
