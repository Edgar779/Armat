import React, { Component } from 'react'
import {EditorState} from "draft-js";
import dynamic from 'next/dynamic';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {stateToHTML} from "draft-js-export-html";
import {  ContentState, convertFromHTML } from 'draft-js'

export default class ArticleEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
        editorState: this.props.defaultText ?
            EditorState.createWithContent(
            ContentState.createFromBlockArray(
                convertFromHTML(this.props.defaultText ? this.props.defaultText : '')
            )
        )
            :
            EditorState.createEmpty()
    };
  }

  onEditorStateChange = (editorState) => {
     this.setState({
      editorState,
    });
      const textForSend = stateToHTML(editorState.getCurrentContent());
      this.props.handleChangeText(textForSend)
  };


  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar-class"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        onEditorStateChange={this.onEditorStateChange}
        placeholder={'Enter the Description here...'}
        toolbar={{
          options: ['inline', 'list', 'textAlign', 'link', 'blockType' ],
          inline:  {
              inDropdown: false,
              options: ['bold', 'italic', 'underline', ],
              bold: {icon:'assets/icons/filters/boldIcon.svg',  className: undefined },
              italic: {icon:'assets/icons/filters/ItalicIcon.svg',  className: undefined },
              underline: {icon:'assets/icons/filters/underlineIcon.svg', className: undefined },
          },
          list: {
              inDropdown: false,
              options: ['ordered', 'unordered' ],
              ordered: {icon:'assets/icons/filters/numericListIcon.svg', className: undefined },
              unordered: {icon:'assets/icons/filters/ordericListIcon.svg', className: undefined },
          },
          textAlign: {
              inDropdown: false,
              options: ['left', 'center', 'right'],
              left:{icon:'assets/icons/filters/leftAlignIcon.svg', className: undefined },
              center:{icon:'assets/icons/filters/centerAlignIcon.svg', className: undefined },
              right:{icon:'assets/icons/filters/rightAlignIcon.svg', className: undefined },
          },

            link: {
                inDropdown: false,
                options: ['link'],
                link: { icon:'assets/icons/filters/InsertLinkIcon.svg', className: undefined },
            },

        }}
      />
    )
  }
}