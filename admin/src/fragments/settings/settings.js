import { Categories, Tags } from './core';
import { settingsStyle } from './core/style';

export const Settings = ({}) => {
    const classes = settingsStyle();
    return (
        <div className={classes.SettingsBackground}>
            <Categories />
            <Tags />
        </div>
    );
};
