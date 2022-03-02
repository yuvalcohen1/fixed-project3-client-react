import React from "react";
import RegisterBox from "../../components/RegisterBox/RegisterBox";
import "./RegisterPage.css";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <div className="register-page">
      <RegisterBox />
    </div>
  );
};

export default RegisterPage;
