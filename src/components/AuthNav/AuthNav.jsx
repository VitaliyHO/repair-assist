import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <>
      <NavLink to="/login">LogIn</NavLink>
      <NavLink to="/register">Register</NavLink>
    </>
  );
};
