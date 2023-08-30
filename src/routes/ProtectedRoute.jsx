import { Outlet, Navigate } from "react-router-dom";
/* import { getUser } from "./utils/auth"; */ // Este es el archivo hipotético que contiene la función getUser().

const ProtectedRoute = () => {
  /* const usuario = getUser(); */ // La función getUser() devuelve el usuario si está logueado o null si no lo está.

  const usuario = "PRUEBA";
  /* const usuario = null; */

  if (!usuario) {
    console.log("no paso!!")
    return <Navigate to="/login" />;
  }
  console.log("si paso!!")
  return <Outlet />;
}

export default ProtectedRoute;