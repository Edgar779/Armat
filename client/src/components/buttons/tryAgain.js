import { Button } from '@material-ui/core';
import { useGlobalStyles } from 'theme';
import { Colors } from 'utils';

export const TryAgain = ({ text, handleCLic, small }) => {
    const globalClasses = useGlobalStyles();
    return (
        <>
            <Button
                style={
                    small === true
                        ? {
                              borderRadius: '24px',
                              height: '48px',
                              background: Colors.ThemeGreen,
                              width: '180px',
                              padding: 0,
                              fontSize: '16px',
                          }
                        : {
                              borderRadius: '24px',
                              height: '48px',
                              background: Colors.ThemeGreen,
                              width: '243px',
                              padding: 0,
                              fontSize: '16px',
                          }
                }
                className={globalClasses.button}
                onClick={handleCLic}>
                {text}
            </Button>
        </>
    );
};
