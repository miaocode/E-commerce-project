import React from "react";
import EmailInput from "../../../../common/input/emailInput";
import { LOGIN_FORM } from "../../../../content/form";

const ResetPasswordModalContent = ({
  userInfo,
  setUserInfo,
  setModalContent,
}) => {
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleClick = () => {
    const checkEmail = EMAIL_REGEX.test(userInfo.email);
    if (!checkEmail) {
      alert("Invalid Email!");
    } else {
      setUserInfo({ email: "", password: "" });
      setModalContent({
        modalStatus: "passwordLink",
        modalTitle: "",
      });
      setUserInfo({ email: "", password: "" });
    }
  };
  return (
    <>
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
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        onClick={handleClick}
      >
        Update password
      </button>
    </>
  );
};

export default ResetPasswordModalContent;
