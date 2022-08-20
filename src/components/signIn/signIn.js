import { useState } from "react";
import PopupModal from "../../common/popupModal/popupModal";
import SignInModalContent from "../signIn/modalContent/signInModalContent/signInModalContent";
import SignUpModalContent from "../signIn/modalContent/signUpModalContent/signUpModalContent";
import ResetPasswordModalContent from "../signIn/modalContent/resetPasswordModalContent/resetPasswordModalContent";
import PasswordLink from "../signIn/passwordLink/passwordLink";

const SignIn = ({ visible, setVisible, setIsLoggedIn }) => {
  const [modalContent, setModalContent] = useState({
    modalStatus: "signIn",
    modalTitle: "Sign In",
  });
  const [userInfo, setUserInfo] = useState([], () => {
    const localData = localStorage.getItem("users");
    return localData ? JSON.parse(localData) : [];
  });

  const selectModalContent = (modalStatus) => {
    switch (modalStatus) {
      case "signIn":
        return (
          <SignInModalContent
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setModalContent={setModalContent}
            setVisible={setVisible}
            setIsLoggedIn={setIsLoggedIn}
          />
        );
      case "signUp":
        return (
          <SignUpModalContent
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setModalContent={setModalContent}
            setVisible={setVisible}
          />
        );
      case "resetPassword":
        return (
          <ResetPasswordModalContent
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setModalContent={setModalContent}
          />
        );
      case "passwordLink":
        return <PasswordLink />;
      default:
        return (
          <SignInModalContent
            userInfo={userInfo}
            setUserInfo={setUserInfo}
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
