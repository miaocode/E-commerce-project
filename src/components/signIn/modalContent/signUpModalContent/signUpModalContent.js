import { React, useEffect, useState } from "react";
import EmailInput from "../../../../common/input/emailInput";
import PasswordInput from "../../../../common/input/passwordInput";
import { LOGIN_FORM } from "../../../../content/form";
import api from "../../../../api/index";

const SignUpModalContent = ({ user, setUser, setModalContent, setVisible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PWD_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const handleSignUp = async () => {
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
    try {
      const res = await api.registerUser({
        email: email,
        password: password,
      });

      alert("You have been signed up!");
      setVisible(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong...");
    }
  };

  const handleClick = () => {
    setModalContent({ modalStatus: "signIn", modalTitle: "Sign In" });
    setEmail("");
    setPassword("");
  };

  return (
    <>
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
        // onClick={() => signUp(dispatch)(userInfo)}
      >
        Create account
      </button>
      <div>
        Already have an account
        <a href="#" className="link-primary" onClick={handleClick}>
          Sign in
        </a>
      </div>
    </>
  );
};

export default SignUpModalContent;
