import React from "react";
import LoginBox from "../../components/LoginBox/LoginBox";
import "./LoginPage.css";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="login-page">
      <LoginBox />
    </div>
  );
};

export default LoginPage;
