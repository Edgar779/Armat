import React, { useState, Fragment, useContext } from "react";
import { createContext } from "react";
import { SimpleModal } from "../../components/modal/modalBase";
import { Svg } from "../../assets";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet/lib/SwipeableBottomSheet";


export const ModalContext = createContext();


export const CustomModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState("");
  const [params, setParams] = useState({});
  const [modalInfo, setModalInfo] = useState({});

  return (
    <Fragment>
      <ModalContext.Provider value={{ activeModal, setActiveModal, params, setParams, modalInfo, setModalInfo }}>
        {children}
      </ModalContext.Provider>
    </Fragment>
  );
};

export const useModal = () => {
  const { setActiveModal, params, setParams, modalInfo, setModalInfo } = useContext(ModalContext);

  return {
    openModal: (params = {}, modalInfo) => {
      setActiveModal(true);
      setParams(params);
      setModalInfo(modalInfo);
    },
    close: () => {
      setActiveModal("");
      setParams({});
      setModalInfo({});
    },
    params,
    modalInfo
  };
};


export const CustomModals = () => {
  const { activeModal, setActiveModal } = useContext(ModalContext);
  const { params, close, modalInfo } = useModal();

  const swipeUp = {
    width: "100%",
    margin: "0 auto",
    borderRadius: "8px 8px 0 0",
    zIndex: 99999,
  };

  return (
    <div>

      {modalInfo?.type === 'swipe' ?
        <SwipeableBottomSheet
          style={{ ...swipeUp, background: "transparent" }}
          open={activeModal}
          onChange={() => setActiveModal(false)}
          className="swipe-up"
        >
          {params}
        </SwipeableBottomSheet>
        :
        <SimpleModal
          openDefault={activeModal ? activeModal : false}
          content={
            <div style={{ outline: "none" }} className="modal-wrapper-style">
              <div className="modal-header-style">
                <button type="button" className="close-button" onClick={() => close()}>
                  <img src={Svg.CloseModal} alt="Close-Modal" />
                </button>
              </div>
              <div className="modal-body-style">
                {params}
              </div>
            </div>
          }
        />
      }
    </div>
  );
};