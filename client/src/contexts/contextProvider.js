import { createContext } from 'react';
import { IconProvider } from './icon/iconProvider';
import { ModalProvider } from './modal/modalProvider';

export const Context = createContext();

export const ContextProvider = ({ children }) => (
    <Context.Provider value={{}}>
        <IconProvider>
            <ModalProvider>{children}</ModalProvider>
        </IconProvider>
    </Context.Provider>
);
