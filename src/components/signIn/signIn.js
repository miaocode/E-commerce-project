import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PopupModal from "../../common/popupModal/popupModal";
import SignInModalContent from "../signIn/modalContent/signInModalContent/signInModalContent";
import SignUpModalContent from "../signIn/modalContent/signUpModalContent/signUpModalContent";
import ResetPasswordModalContent from "../signIn/modalContent/resetPasswordModalContent/resetPasswordModalContent";
import PasswordLink from "./modalContent/passwordLink/passwordLink";

const SignIn = ({ isLoggedIn, setIsLoggedIn }) => {
  const modalStatus = useSelector((state) => state.modal.accountModal.content);
  const modalVisible = useSelector((state) => state.modal.accountModal.visible);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("setIsLoggedIn"));
  }, [isLoggedIn]);

  const selectModalContent = (modalStatus) => {
    switch (modalStatus) {
      case "signIn":
        return (
          <SignInModalContent
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        );
      case "signUp":
        return <SignUpModalContent />;
      case "resetPassword":
        return <ResetPasswordModalContent />;
      case "passwordLink":
        return <PasswordLink />;
      default:
        return (
          <SignInModalContent
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        );
    }
  };
  return (
    <PopupModal visible={modalVisible}>
      {selectModalContent(modalStatus)}
    </PopupModal>
  );
};

export default SignIn;
