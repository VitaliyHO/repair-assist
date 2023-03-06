import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useState } from "react";

export const LoginForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email: userEmail, password: userPass }));

    reset();
  };

  const reset = () => {
    setUserEmail("");
    setUserPass("");
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <input
        type="email"
        name="email"
        value={userEmail}
        placeholder="E-mail"
        onChange={(e) => setUserEmail(e.target.value)}
        required
      />
      <input
        type="password"
        name="pass"
        value={userPass}
        placeholder="Password"
        onChange={(e) => setUserPass(e.target.value)}
        required
      />
      <button type="submit">LogIn</button>
    </form>
  );
};
