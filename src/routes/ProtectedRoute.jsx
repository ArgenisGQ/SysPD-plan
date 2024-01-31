import { Outlet, Navigate } from "react-router-dom";
/* import { getUser } from "./utils/auth"; */ // Este es el archivo hipotético que contiene la función getUser().

const ProtectedRoute = ({
  canActive,
  redirectPath = '/'
}) => {
  /* const usuario = getUser(); */ // La función getUser() devuelve el usuario si está logueado o null si no lo está.

  const usuario = "PRUEBA";
  console.log("canActive: ", canActive)
  /* const usuario = null; */

  if (!canActive) {
    console.log("no paso!!")
    return <Navigate to="/login" />;
  }
  console.log("si paso!!")
  return <Outlet />;
}

export default ProtectedRoute;