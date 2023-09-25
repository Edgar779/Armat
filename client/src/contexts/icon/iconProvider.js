import { createContext } from 'react';
import { SVGS } from './import';

export const IconContext = createContext();

export const IconProvider = ({ children }) => {
    const SVGIcon = (props) => {
        let SVG = SVGS[props.name];
        return SVG ? <SVG {...props} className={`icon-${props.name}`} fill={props.color} /> : <></>;
    };
    return <IconContext.Provider value={{ SVGIcon }}>{children}</IconContext.Provider>;
};
