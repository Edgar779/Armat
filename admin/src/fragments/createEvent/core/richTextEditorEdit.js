import React, {Component} from 'react';
import {Images} from "theme";
import RichTextEditor from "react-rte";

class RichTextEditorEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorValue: RichTextEditor.createEmptyValue(),
            newValue: '',
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (!this.state.newValue) {
            const note = nextProps.text
            let editorValue = this.state.editorValue
            if (editorValue.toString('html') !== note) {
                editorValue = RichTextEditor.createValueFromString(note, 'html')
            }
            this.setState({editorValue})
        }
    }

    onChange = (editorValue) => {
        this.setState({editorValue});
        this.setState({newValue: editorValue.toString('html')});
        this.props.onChange(editorValue.toString('html'));
    };

    render() {
        const toolbarConfig = {
            display: [
                'INLINE_STYLE_BUTTONS',
                'BLOCK_TYPE_BUTTONS',
                'BLOCK_ALIGNMENT_BUTTONS',
                'LINK_BUTTONS',
                'BLOCK_TYPE_DROPDOWN'
            ],
            INLINE_STYLE_BUTTONS: [
                {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
                {label: 'Italic', style: 'ITALIC'},
                {label: 'Underline', style: 'UNDERLINE'},
            ],
            BLOCK_TYPE_BUTTONS: [
                {label: 'UL', style: 'unordered-list-item'},
                {label: 'OL', style: 'ordered-list-item'},
            ],
            BLOCK_ALIGNMENT_BUTTONS: [
                {label: 'AL', style: 'ALIGN_LEFT'},
                {label: 'AC', style: 'ALIGN_CENTER'},
                {label: 'AR', style: 'ALIGN_RIGHT'},
            ],
            LINK_BUTTONS: [
                {label: 'Link!', style: 'unstyled', className: 'rte-button rte-button-link'},
                {label: 'Remove link', style: 'unstyled', className: 'rte-button rte-button-link-remove'}
            ],
            BLOCK_TYPE_DROPDOWN: [
                {label: 'Normal', style: 'unstyled',  className: 'block-type'},
                {label: 'Heading Large', style: 'header-one'},
                {label: 'Heading Medium', style: 'header-two'},
                {label: 'Heading Small', style: 'header-three'}
            ],
        };

        return (
            <div>
                <div
                    style={{marginTop: '122px'}}
                    className={'basicInfo'}
                >
                    <img src={Images.description} alt="image"/>
                    <p>Description</p>
                </div>
                <p className={'basicInfoText'}>{
                    this.props.type === 'org' ?
                        'Include any additional information about the organization that you might want users to know about.'
                        :
                        'Include any additional information about the event that you might want users to know about (parking, payment info, contact info, important links, etc.).'
                }
                </p>

                <RichTextEditor
                    disabled={this.props.disableLabels}
                    placeholder={'Enter the Description here...'}
                    name='body'
                    value={this.state.editorValue}
                    onChange={this.onChange}
                    toolbarConfig={toolbarConfig}
                />
            </div>

        );
    }
}

export default RichTextEditorEdit
