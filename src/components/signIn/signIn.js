import { useEffect } from "react";
import { useSelector } from "react-redux";
import PopupModal from "../../common/popupModal/popupModal";
import SignInModalContent from "../signIn/modalContent/signInModalContent/signInModalContent";
import SignUpModalContent from "../signIn/modalContent/signUpModalContent/signUpModalContent";
import ResetPasswordModalContent from "../signIn/modalContent/resetPasswordModalContent/resetPasswordModalContent";
import PasswordLink from "./modalContent/passwordLink/passwordLink";

const SignIn = () => {
  const modalStatus = useSelector((state) => state.modal.accountModal.content);
  const modalVisible = useSelector((state) => state.modal.accountModal.visible);

  const selectModalContent = (modalStatus) => {
    switch (modalStatus) {
      case "signIn":
        return <SignInModalContent />;
      case "signUp":
        return <SignUpModalContent />;
      case "resetPassword":
        return <ResetPasswordModalContent />;
      case "passwordLink":
        return <PasswordLink />;
      default:
        return <SignInModalContent />;
    }
  };
  return (
    <PopupModal visible={modalVisible}>
      {selectModalContent(modalStatus)}
    </PopupModal>
  );
};

export default SignIn;
