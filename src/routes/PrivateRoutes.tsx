import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { ReactNode } from "react";
import { getLocalStorageValue } from "../utils/localstorageutil";
import { Navigate } from "react-router-dom";
import CONSTANTS from "../constants";

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn, data } = useSelector((state: RootState) => state.auth);
  const location = getLocalStorageValue(CONSTANTS.location);
  if (isLoggedIn && data?.role === "ADMIN")
     return children;
  return <Navigate to="/signin" state={{from:location}} replace/>;
};


export default PrivateRoutes;