import { settingsStyle } from './style';

export const SettingsNoInfo = ({ text }) => {
    const classes = settingsStyle();

    return (
        <div className={classes.noInfoScreen}>
            <p>{text}</p>
        </div>
    );
};
