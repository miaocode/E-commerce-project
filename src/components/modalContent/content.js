import { useSelector } from "react-redux";
import PopupModal from "../../common/popupModal/popupModal";
import SignInModalContent from "./signInModalContent/signInModalContent";
import SignUpModalContent from "./signUpModalContent/signUpModalContent";
import ResetPasswordModalContent from "./resetPasswordModalContent/resetPasswordModalContent";
import PasswordLink from "./passwordLink/passwordLink";

const Content = () => {
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

export default Content;
