import React from 'react';
import { useForm } from 'react-hook-form';
import { CustomInput,  } from 'components';
import { useModal } from "../../../../utils";

const REQUEST_TYPE = 'CONFIRM_DELETION';

export const ConfirmDeletion = () => {
    /**
     *  Hooks.
     */

    const { closeModal } = useModal();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            memebrs: '',
        },
    });

    const onSubmit = (data) => {
        const formData = {
            ...data,
        };
    };

    const handelDeleteList = () => {};

    return (
        <div className="organization-modal">
            <div className="invite-container">
                <form onSubmit={handleSubmit(onSubmit)} className="form-messages">
                    <CustomInput
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        type="text"
                        label="Enter List Name to Delete"
                        placeholder={'Enter name'}
                    />
                    <div className="modal-footer">
                        <div className="btn-between">
                            <button className="cancel-button" color="info" onClick={() => closeModal()}>
                                <span className="button-text">Cancel</span>
                            </button>
                            <button className="delete-button" color="info" onClick={handelDeleteList}>
                                <span className="button-text">Delete</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
