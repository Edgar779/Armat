import React, { useState, Fragment } from 'react';
import { ModalContext } from './context';

export const ModalProvider = ({ children }) => {
    /**
     * Hooks.
     */

    const [activeModal, setActiveModal] = useState('');
    const [params, setParams] = useState({});

    return (
        <Fragment>
            <ModalContext.Provider
                value={{
                    activeModal,
                    setActiveModal,
                    params,
                    setParams,
                }}>
                {children}
            </ModalContext.Provider>
        </Fragment>
    );
};
