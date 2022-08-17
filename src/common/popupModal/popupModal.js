import React from "react";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./popupModal.css";

const PopupModal = ({ modalContent, visible, handleOnCancel, children }) => {
  return (
    <Modal
      width={393}
      closeIcon={<CloseCircleOutlined />}
      title={<div className="modal-title">{modalContent.modalTitle}</div>}
      visible={visible}
      footer={null}
      onCancel={handleOnCancel}
    >
      {children}
    </Modal>
  );
};

export default PopupModal;
