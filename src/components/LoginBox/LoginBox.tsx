import React, { FC, FormEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/app/hooks";
import { fetchUserAndSetJwtCookieByLogin } from "../../redux/thunks/user-thunks";
import "./LoginBox.css";

type Props = {};

const LoginBox: FC<Props> = (props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      dispatch(fetchUserAndSetJwtCookieByLogin({ username, password }));

      setUsername("");
      setPassword("");
    },
    [username, password, dispatch]
  );

  return (
    <div className="login-box">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label htmlFor="login-username">Username</label>
          <input
            id="login-username"
            type="text"
            placeholder="Enter username..."
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="text"
            placeholder="Enter password..."
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit">Submit</button>
        <Link className="link-to-register" to="/register">
          Don't have an account yet?
        </Link>
      </form>
    </div>
  );
};

export default LoginBox;
