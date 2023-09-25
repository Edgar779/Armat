import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const RichInput = ({description, setDescription}) => {

    return (
        <div className="rich-container">
            <ReactQuill theme="snow" value={description} onChange={setDescription} placeholder="Enter the Description here..." />
        </div>
    );
};
