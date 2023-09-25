import React, { useState, useCallback } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const useWasShowed = () => {
    const [wasShowed, setWasShowed] = useState(false);

    const isVisibleHandler = useCallback((isVisible) => {
        if (isVisible) {
            setWasShowed(true);
        }
        return;
    }, []);
    return { wasShowed, isVisibleHandler, setWasShowed };
};

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
export const GetBreakpoint = (unusedBreakpoint) => {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    // Remove unused breakpoint
    if (unusedBreakpoint) {
        const index = keys.indexOf(unusedBreakpoint);
        if (index > -1) {
            keys.splice(index, 1);
        }
    }
    return (
        keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || 'xs'
    );
};
