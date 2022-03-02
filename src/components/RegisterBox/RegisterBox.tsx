import React, { FC, FormEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { RegisterBodyModel } from "../../models/RegisterBody.model";
import { useAppDispatch } from "../../redux/app/hooks";
import { fetchUserAndSetJwtCookieByRegister } from "../../redux/thunks/user-thunks";
import "./RegisterBox.css";

type Props = {};

const RegisterBox: FC<Props> = (props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleRegister = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const registerBody: RegisterBodyModel = {
        firstName,
        lastName,
        username,
        password,
      };

      dispatch(fetchUserAndSetJwtCookieByRegister(registerBody));

      setFirstName("");
      setLastName("");
      setUsername("");
      setPassword("");
    },
    [firstName, lastName, username, password, dispatch]
  );

  return (
    <div className="register-box">
      <h1>Register</h1>

      <form className="register-form" onSubmit={handleRegister}>
        <div className="register-form-group">
          <label htmlFor="register-first-name">First Name</label>
          <input
            type="text"
            id="register-first-name"
            required
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="register-last-name">Last Name</label>
          <input
            type="text"
            id="register-last-name"
            required
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="register-username">Username</label>
          <input
            type="text"
            id="register-username"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="register-password">Password</label>
          <input
            type="text"
            id="register-password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit">Submit</button>
        <Link className="link-to-login" to="/login">Already have an account?</Link>
      </form>
    </div>
  );
};

export default RegisterBox;
