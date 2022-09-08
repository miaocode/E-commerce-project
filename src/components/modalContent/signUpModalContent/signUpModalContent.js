import { React, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAccountModalContent,
  setAccountModalVisible,
} from "../../../redux/modalReducer";
import { register } from "../../../redux/userReducer";
import EmailInput from "../../../common/input/emailInput";
import PasswordInput from "../../../common/input/passwordInput";
import { validateEmail, validatePassword } from "../validator";
import { LOGIN_FORM } from "../../../content/form";
import "../modalContent.css";

const SignUpModalContent = ({ user, setUser, setModalContent, setVisible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    if (!validateEmail(email) && !validatePassword(password)) {
      alert("Invalid Email and Password ");
    } else if (!validateEmail(email)) {
      alert("Invalid Email!");
    } else if (!validatePassword(password)) {
      alert(
        "Password must at least eight characters and contain one letter, one number and one special character!"
      );
    } else {
      try {
        dispatch(register({ email: email, password: password }));
        dispatch(setAccountModalVisible(false));
        setEmail("");
        setPassword("");
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleClick = () => {
    dispatch(setAccountModalContent("signIn"));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h2>Sign Up</h2>
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
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
        onClick={handleSignUp}
      >
        Create account
      </button>
      <div>
        <span>Already have an account </span>
        <a href="#" className="link-primary" onClick={handleClick}>
          Sign in
        </a>
      </div>
    </>
  );
};

export default SignUpModalContent;
