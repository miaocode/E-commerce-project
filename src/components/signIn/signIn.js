import { useState } from "react";
import PopupModal from "../../common/popupModal/popupModal";
import SignInModalContent from "../signIn/modalContent/signInModalContent/signInModalContent";
import SignUpModalContent from "../signIn/modalContent/signUpModalContent/signUpModalContent";
import ResetPasswordModalContent from "../signIn/modalContent/resetPasswordModalContent/resetPasswordModalContent";
import PasswordLink from "../signIn/passwordLink/passwordLink";

const SignIn = ({ visible, setVisible, setIsLoggedIn, user, setUser }) => {
  const [modalContent, setModalContent] = useState({
    modalStatus: "signIn",
    modalTitle: "Sign In",
  });

  const selectModalContent = (modalStatus) => {
    switch (modalStatus) {
      case "signIn":
        return (
          <SignInModalContent
            user={user}
            setUser={setUser}
            setModalContent={setModalContent}
            setVisible={setVisible}
            setIsLoggedIn={setIsLoggedIn}
          />
        );
      case "signUp":
        return (
          <SignUpModalContent
            user={user}
            setUser={setUser}
            setModalContent={setModalContent}
            setVisible={setVisible}
          />
        );
      case "resetPassword":
        return (
          <ResetPasswordModalContent
            user={user}
            setUser={setUser}
            setModalContent={setModalContent}
          />
        );
      case "passwordLink":
        return <PasswordLink />;
      default:
        return (
          <SignInModalContent
            user={user}
            setUser={setUser}
            setModalContent={setModalContent}
          />
        );
    }
  };
  return (
    <PopupModal
      visible={visible}
      modalContent={modalContent}
      handleOnCancel={() => {
        setVisible(false);
        setModalContent({
          modalStatus: "signIn",
          modalTitle: "Sign In",
        });
      }}
    >
      {selectModalContent(modalContent.modalStatus)}
    </PopupModal>
  );
};

export default SignIn;
