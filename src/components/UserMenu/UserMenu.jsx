import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  }

  return (
    <>
      <NavLink to="/tasks">Tasks</NavLink>
      <p>{user.name}</p>
      <button type="button" onClick={handleLogOut}>LogOut</button>
    </>
  );
};
