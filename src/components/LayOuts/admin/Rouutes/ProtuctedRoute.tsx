import { ReactNode } from "react";

import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { logout, useCurrentToken } from "../../../../redux/features/slices/authSlice";
import { verifyToken } from "../../../utils/verifyfyToken";


type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);
  let user;

  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/login" />;
  }
  if (!token) {
    return <Navigate to="/login" />;
  }

};

export default ProtectedRoute;
