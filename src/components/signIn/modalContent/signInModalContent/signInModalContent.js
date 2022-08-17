import React, { useState } from "react";
import EmailInput from "../../../../common/input/emailInput";
import PasswordInput from "../../../../common/input/passwordInput";
import { LOGIN_FORM } from "../../../../content/form";

// import mockAPI from "../mockAPI/mockAPI";

const SignInModalContent = ({ userInfo, setUserInfo, setModalContent }) => {
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PWD_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const handleSubmit = () => {
    const checkEmail = EMAIL_REGEX.test(userInfo.email);
    const checkPassword = PWD_REGEX.test(userInfo.password);
    if (!checkEmail && !checkPassword) {
      alert("Invalid Email and Password ");
    } else if (!checkEmail) {
      alert("Invalid Email!");
    } else if (!checkPassword) {
      alert(
        "Password must at least eight characters and contain one letter, one number and one special character!"
      );
    }
  };

  const handleClick = () => {
    setModalContent({ modalStatus: "signUp", modalTitle: "Sign Up" });
    setUserInfo({ email: "", password: "" });
  };

  return (
    <>
      <div>
        <EmailInput
          label={LOGIN_FORM.EMAIL.LABEL}
          type={LOGIN_FORM.EMAIL.TYPE}
          value={userInfo.email}
          onChange={(e) =>
            setUserInfo((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
        <PasswordInput
          label={LOGIN_FORM.PASSWORD.LABEL}
          type={LOGIN_FORM.PASSWORD.TYPE}
          value={userInfo.password}
          minLength={8}
          maxLength={30}
          onChange={(e) =>
            setUserInfo((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </div>
      <div>
        Don't have an account?
        <a href="#" className="link-primary" onClick={handleClick}>
          Sign up
        </a>
        <span className="forgot-password">
          <a
            href="#"
            className="link-primary"
            onClick={() =>
              setModalContent({
                modalStatus: "resetPassword",
                modalTitle: "Update your password",
              })
            }
          >
            Forgot password
          </a>
        </span>
      </div>
    </>
  );
};

export default SignInModalContent;
