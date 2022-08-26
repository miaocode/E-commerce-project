import React, { useEffect, useState } from "react";
import EmailInput from "../../../../common/input/emailInput";
import PasswordInput from "../../../../common/input/passwordInput";
import { LOGIN_FORM } from "../../../../content/form";
import api from "../../../../api/index";

// import mockAPI from "../mockAPI/mockAPI";

const SignInModalContent = ({
  setVisible,
  userInfo,
  setUserInfo,
  setModalContent,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("setIsLoggedIn"));
  }, [isLoggedIn]);

  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PWD_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const handleSignIn = async () => {
    const checkEmail = EMAIL_REGEX.test(email);
    const checkPassword = PWD_REGEX.test(password);

    if (!checkEmail && !checkPassword) {
      alert("Invalid Email and Password ");
    } else if (!checkEmail) {
      alert("Invalid Email!");
    } else if (!checkPassword) {
      alert(
        "Password must at least eight characters and contain one letter, one number and one special character!"
      );
    }
    const res = await api.signIn({
      email: email,
      password: password,
    });

    const data = await res.json();

    if (data.email) {
      await localStorage.setItem("setIsLoggedIn", JSON.stringify(true));
      alert("Welcome back!");
      setIsLoggedIn(true);
      setVisible(false);
    } else {
      alert(data);
    }
  };

  const handleSignUp = () => {
    setModalContent({ modalStatus: "signUp", modalTitle: "Sign Up" });
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div>
        <EmailInput
          label={LOGIN_FORM.EMAIL.LABEL}
          type={LOGIN_FORM.EMAIL.TYPE}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          label={LOGIN_FORM.PASSWORD.LABEL}
          type={LOGIN_FORM.PASSWORD.TYPE}
          value={password}
          minLength={8}
          maxLength={30}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
      <div>
        Don't have an account?
        <a href="#" className="link-primary" onClick={handleSignUp}>
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
