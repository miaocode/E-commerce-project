import { React, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAccountModalContent,
  setAccountModalVisible,
} from "../../../redux/modalReducer";
import { logIn } from "../../../redux/userReducer";
import EmailInput from "../../../common/input/emailInput";
import PasswordInput from "../../../common/input/passwordInput";
import { validateEmail } from "../validator";
import { LOGIN_FORM } from "../../../content/form";

const SignInModalContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    if (!validateEmail(email)) {
      alert("Invalid Email!");
    } else {
      try {
        dispatch(logIn({ email: email, password: password }));
        dispatch(setAccountModalVisible(false));
        setEmail("");
        setPassword("");
      } catch (error) {
        alert(error);
      }
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
