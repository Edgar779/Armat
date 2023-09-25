import React from 'react';
import RichTextEditor from 'react-rte';
import {Images} from 'theme';

export class RichInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue(),
    };
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      this.setState({value: value});
      value.toString('html');
      this.props.onChange(value.toString('html'));
    }
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
          // className={ classes.basicInfo }
        >
          <img src={Images.description} alt="image"/>
          <p>Description</p>
        </div>
        <p className={'basicInfoText'}>
          Include any additional information about the event that you might want users to know about (parking, payment info, contact info, important links, etc.).
        </p>

        <RichTextEditor
          disabled={this.props.disableLabels}
          placeholder={'Enter the Description here...'}
          toolbarConfig={toolbarConfig}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
