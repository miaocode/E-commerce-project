import React, { useState } from "react";
import EmailInput from "../../../../common/input/emailInput";
import { LOGIN_FORM } from "../../../../content/form";

const ResetPasswordModalContent = ({
  userInfo,
  setUserInfo,
  setModalContent,
}) => {
  const [email, setEmail] = useState("");
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleClick = () => {
    const checkEmail = EMAIL_REGEX.test(email);
    if (!checkEmail) {
      alert("Invalid Email!");
    } else {
      setEmail("");
      setModalContent({
        modalStatus: "passwordLink",
        modalTitle: "",
      });
    }
  };
  return (
    <>
      <EmailInput
        label={LOGIN_FORM.EMAIL.LABEL}
        type={LOGIN_FORM.EMAIL.TYPE}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
