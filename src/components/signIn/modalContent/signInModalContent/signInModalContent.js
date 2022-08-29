import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setAccountModalVisible,
  setAccountModalContent,
} from "../../../../redux/modalReducer";
import EmailInput from "../../../../common/input/emailInput";
import PasswordInput from "../../../../common/input/passwordInput";
import { validateEmail, validatePassword } from "../validator";
import { LOGIN_FORM } from "../../../../content/form";
import api from "../../../../api/index";

// import mockAPI from "../mockAPI/mockAPI";

const SignInModalContent = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("setIsLoggedIn"));
  }, [isLoggedIn]);

  const handleSignIn = async () => {
    if (!validateEmail(email) && !validatePassword(password)) {
      alert("Invalid Email and Password ");
    } else if (validateEmail(email)) {
      alert("Invalid Email!");
    } else if (validatePassword(password)) {
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
      dispatch(setAccountModalVisible(false));
    } else {
      alert(data);
    }
  };

  const handleSignUp = () => {
    dispatch(setAccountModalContent("signUp"));
    setEmail("");
    setPassword("");
  };

  const handlePassword = () => {
    dispatch(setAccountModalContent("resetPassword"));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div>
        <h2>Sign In</h2>
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
      <div className="modal-footer">
        Don't have an account?
        <a href="#" className="link-primary" onClick={handleSignUp}>
          Sign up
        </a>
        <span className="forgot-password">
          <a href="#" className="link-primary" onClick={handlePassword}>
            Forgot password
          </a>
        </span>
      </div>
    </>
  );
};

export default SignInModalContent;
