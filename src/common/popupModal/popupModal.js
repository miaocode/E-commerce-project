import React from "react";
import { useDispatch } from "react-redux";
import {
  setAccountModalVisible,
  setAccountModalContent,
} from "../../redux/modalReducer";
import { Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./popupModal.css";

const PopupModal = ({ visible, children }) => {
  const dispatch = useDispatch();
  const handleOnCancel = () => {
    dispatch(setAccountModalVisible(false));
    dispatch(setAccountModalContent("signIn"));
  };
  return (
    <Modal
      width={393}
      visible={visible}
      closeIcon={<CloseCircleOutlined />}
      footer={null}
      onCancel={handleOnCancel}
    >
      {children}
    </Modal>
  );
};

export default PopupModal;
