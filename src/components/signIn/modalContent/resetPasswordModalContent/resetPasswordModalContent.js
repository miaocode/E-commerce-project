import React, { useState } from "react";
import EmailInput from "../../../../common/input/emailInput";
import PasswordInput from "../../../../common/input/passwordInput";
import { LOGIN_FORM } from "../../../../content/form";
import api from "../../../../api/index";

const ResetPasswordModalContent = ({
  userInfo,
  setUserInfo,
  setModalContent,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleClick = async () => {
    const checkEmail = EMAIL_REGEX.test(email);
    if (!checkEmail) {
      alert("Invalid Email!");
    }

    const res = await api.resetPassword({
      email: email,
      password: password,
      newPassword: newPassword,
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    // setEmail("");
    // setModalContent({
    //   modalStatus: "passwordLink",
    //   modalTitle: "",
    // });
  };
  return (
    <>
      <h2>Reset Password</h2>
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
      <PasswordInput
        label="New Password"
        type={LOGIN_FORM.PASSWORD.TYPE}
        value={newPassword}
        minLength={8}
        maxLength={30}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
        onClick={handleClick}
      >
        Update password
      </button>
    </>
  );
};

export default ResetPasswordModalContent;
