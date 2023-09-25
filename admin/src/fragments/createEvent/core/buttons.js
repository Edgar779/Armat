// import { Icon } from 'components';
// import { SVGNames } from 'constants';
import React, { useState } from 'react';
import { CreateEventStyle } from './styles';
import { TypedButton } from './typedButton';
import { inputsStyle } from '../../../components/inputs/styles';
import {Images} from "../../../theme";

export const Buttons = ({ handleChange, inputs }) => {
    const classes = CreateEventStyle();
    const inputClasses = inputsStyle();


    const [clicked, setClicked] = useState({});
    const handleOpen = (ev) => setClicked(ev);

    return (
        <div>
            <div className={classes.basicInfo}>
                <img src={Images.settingsFill} alt={'icon'}/>
                <p>"Call to Action/CTA" Button Settings</p>
            </div>
            <p className={classes.basicInfoText}>
                To have CTA buttons in event detail page, please fulfill the below fields in accordance with the buttons.
            </p>

            <div className={classes.buttonsWrap}>
                <div className={classes.buttonsWrapper}>
                    <input
                        className={inputClasses.createEventInput}
                        onChange={handleChange}
                        value={inputs.contactUs}
                        name={'contactUs'}
                        placeholder={'Contact Us'}
                    />
                    <TypedButton
                        inputs={inputs.contactUs}
                        clicked={clicked}
                        handleClick={() => handleOpen('contactUs')}
                        name={'contactUs'}
                        type={'contact'}
                        text={'Contact Us'}
                    />
                </div>

                <div className={classes.buttonsWrapper}>
                    <input
                        className={inputClasses.createEventInput}
                        onChange={handleChange}
                        value={inputs.emailUs}
                        name={'emailUs'}
                        placeholder={'Send Email'}
                    />
                    <TypedButton
                        inputs={inputs.emailUs}
                        clicked={clicked}
                        handleClick={() => handleOpen('emailUs')}
                        name={'emailUs'}
                        type={'email'}
                        text={'Send Email'}
                    />
                </div>
                <div className={classes.buttonsWrapper}>
                    <input
                        className={inputClasses.createEventInput}
                        onChange={handleChange}
                        value={inputs.register}
                        name={'register'}
                        placeholder={'Register'}
                    />
                    <TypedButton
                        inputs={inputs.register}
                        clicked={clicked}
                        handleClick={() => handleOpen('register')}
                        name={'register'}
                        type={'register'}
                        text={'Register'}
                    />
                </div>
                {/*<div className={classes.buttonsWrapper}>*/}
                {/*    <input*/}
                {/*        className={inputClasses.createEventInput}*/}
                {/*        onChange={handleChange}*/}
                {/*        value={inputs.buyTickets}*/}
                {/*        name={'buyTickets'}*/}
                {/*        placeholder={'Buy Tickets'}*/}
                {/*    />*/}
                {/*    <TypedButton*/}
                {/*        inputs={inputs.buyTickets}*/}
                {/*        clicked={clicked}*/}
                {/*        handleClick={() => handleOpen('buyTickets')}*/}
                {/*        name={'buyTickets'}*/}
                {/*        type={'tickets'}*/}
                {/*        text={'Buy Tickets'}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className={classes.buttonsWrapper}>
                    <input
                        className={inputClasses.createEventInput}
                        onChange={handleChange}
                        value={inputs.donate}
                        name={'donate'}
                        placeholder={'Donate'}
                    />
                    <TypedButton
                        inputs={inputs.donate}
                        clicked={clicked}
                        handleClick={() => handleOpen('donate')}
                        name={'donate'}
                        type={'donate'}
                        text={'Donate'}
                    />
                </div>
                <div className={classes.buttonsWrapper}>
                    <input
                        className={inputClasses.createEventInput}
                        onChange={handleChange}
                        value={inputs.moreInfo}
                        name={'moreInfo'}
                        placeholder={'More Info'}
                    />
                    <TypedButton
                        inputs={inputs.moreInfo}
                        clicked={clicked}
                        handleClick={() => handleOpen('moreInfo')}
                        name={'moreInfo'}
                        type={'info'}
                        text={'More Info'}
                    />
                </div>
                <div className={classes.buttonsWrapper}>
                    <input
                        className={inputClasses.createEventInput}
                        onChange={handleChange}
                        value={inputs.bookNow}
                        name={'bookNow'}
                        placeholder={'Book Now'}
                    />
                    <TypedButton
                        inputs={inputs.bookNow}
                        clicked={clicked}
                        handleClick={() => handleOpen('bookNow')}
                        name={'bookNow'}
                        type={'book'}
                        text={'Book Now'}
                    />
                </div>
            </div>
        </div>
    );
};
