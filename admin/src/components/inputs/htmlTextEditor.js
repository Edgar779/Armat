import React, { useRef, useState } from 'react';
import MUIRichTextEditor from 'mui-rte';
import Button from '@material-ui/core/Button';
import { convertToRaw } from 'draft-js';

export const HtmlTextEditor = ({}) => {
    const [post, setPost] = useState({
        content: {},
        answer_errors: {},
        open: false,
        errors: null,
    });

    const handleChange = (prop) => (event) => {
        setPost({
            ...post,
            [prop]: event,
        });
    };

    const handleSubmit = () => {
        const { content } = post;
        const answerData = {
            content: convertToRaw(content.getCurrentContent()),
        };
    };

    return (
        <>
            <Button color="secondary" variant="outlined" className="w-1/4" onClick={handleSubmit}>
                Post
            </Button>

            <MUIRichTextEditor
                label="Write your aswer..."
                controls={['bold', 'italic', 'underline', 'highlight', 'link', 'media', 'numberList', 'bulletList', 'quote']}
                inlineToolbar={true}
                onChange={handleChange('content')}
            />
        </>
    );
};
