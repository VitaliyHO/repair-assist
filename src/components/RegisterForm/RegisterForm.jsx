import { useState } from "react";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userType, setUserType] = useState("customer");

  const dispatch = useDispatch();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.name.value);
    dispatch(register({ name: userName, email: userMail, password: userPass, typeOfUser: userType }));
    
    reset();
  };

  const reset = () => {
    setUserName("");
    setUserMail("");
    setUserPass("");
    setUserType("customer");
  };

  return (
    <form onSubmit={handleRegisterSubmit}>
      <input
        name="name"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        name="email"
        type="email"
        value={userMail}
        onChange={(e) => setUserMail(e.target.value)}
        placeholder="E-mail"
        required
      />
      <input
        name="pass"
        type="password"
        value={userPass}
        onChange={(e) => setUserPass(e.target.value)}
        placeholder="Password"
        required
      />
      <label>
        <input
          type="radio"
          name="typeOfUser"
          value="customer"
          onChange={(e) => setUserType(e.target.value)}
          defaultChecked
        />
        Customer
      </label>
      <label>
        <input
          type="radio"
          name="typeOfUser"
          value="master"
          onChange={(e) => setUserType(e.target.value)}
        />
        Master
      </label>
      <label>
        <input
          type="radio"
          name="typeOfUser"
          value="foreman"
          onChange={(e) => setUserType(e.target.value)}
        />
        Foreman
      </label>
      <button type="submit">SignUp</button>
    </form>
  );
};
