import React from "react";
import { Backdrop, Modal } from "@mui/material";
import { Svg } from "../../assets";
import { useModal } from "../../utils";

export const SimpleModal = ({ openDefault, content, disableScrollLock, onClose }) => {
  const { close } = useModal();

  const body = (
    <div className="modal-body">
      {content}
    </div>
  );

  return (
    <div>
      <Modal
        disableScrollLock={disableScrollLock}
        open={openDefault }
        onClose={() => onClose ? onClose() : close()}
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        style={{
          display: "flex", justifyContent: "center", alignItems: "center"
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        {body}
        {/*<div className={"modal-fragment"}>*/}
        {/*  <div className="modal-header">*/}
        {/*    <button type="button" className="close-button" onClick={() => close()}>*/}
        {/*      <img src={Svg.CloseModal} alt="Close-Modal" />*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/**/}
        {/*  {body}*/}
        {/*</div>*/}
      </Modal>
    </div>
  );
};
