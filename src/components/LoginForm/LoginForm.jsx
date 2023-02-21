import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useState } from "react";

export const LoginForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(userEmail, userPass);
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
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="password"
        name="pass"
        value={userPass}
        onChange={(e) => setUserPass(e.target.value)}
      />
      <button type="submit">LogIn</button>
    </form>
  );
};
