import React from 'react';
import { ButtonsStyle } from './styles';
import Button from '@material-ui/core/Button';
import Loader from "react-loader-spinner";

export const DeleteButton = ({ handleClick, text, style, loader }) => {
    const classes = ButtonsStyle();

    return (
        <div className={classes.DeleteButtonBox}>
            <Button style={{ ...style }} onClick={handleClick}>
                {loader === true ?
                    <Loader
                        type="ThreeDots"
                        color="#FFFFFF"
                        height={16}
                        width={16}
                        style={{ margin: '10px', padding: '0' }}
                    />
                   :
                    text
                }
            </Button>
        </div>
    );
};
