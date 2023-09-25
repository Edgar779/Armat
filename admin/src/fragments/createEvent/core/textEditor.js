// import React, { Component } from 'react'
// import {EditorState} from "draft-js";
// // import dynamic from 'next/dynamic';
// // import apiClient from '../api/api_client'
// import { convertFromRaw, convertToRaw } from 'draft-js';
// // const Editor = dynamic(
// //   () => import('react-draft-wysiwyg').then(mod => mod.Editor),
// //   { ssr: false }
// // )
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import {stateToHTML} from "draft-js-export-html";
// import {  ContentState, convertFromHTML } from 'draft-js'
//
//
// // const some =this.props.defaultText ? this.props.defaultText : ''
// export default class ArticleEditor extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             editorState: this.props.defaultText ?
//               EditorState.createWithContent(
//                 ContentState.createFromBlockArray(
//                   convertFromHTML(this.props.defaultText ? this.props.defaultText : '')
//                 )
//               )
//               :
//               EditorState.createEmpty()
//         };
//     }
//
//     onEditorStateChange = (editorState) => {
//         this.setState({
//             editorState,
//         });
//
//         const textForSend = stateToHTML(editorState.getCurrentContent());
//         const textForShow = convertToRaw(editorState.getCurrentContent());
//         this.props.handleChangeText(textForSend)
//         // this.props.handleContent(
//         //   convertToRaw(editorState.getCurrentContent()
//         //   ));
//     };
//
//
//     render() {
//         const { editorState } = this.state;
//         return (
//           <Editor
//             editorState={editorState}
//             toolbarClassName="toolbar-class"
//             wrapperClassName="wrapper-class"
//             editorClassName="editor-class"
//             onEditorStateChange={this.onEditorStateChange}
//             // toolbarOnFocus
//             placeholder={'Enter the Description here...'}
//             toolbar={{
//                 options: ['inline', 'list', 'textAlign', 'link', ],
//                 inline:  {
//                     inDropdown: false,
//                     options: ['bold', 'italic', 'underline', ],
//                     // bold: {icon:'assets/icons/filters/bold.png',  className: undefined },
//                     // italic: {icon:'assets/icons/filters/italic.png',  className: undefined },
//                     // underline: {icon:'assets/icons/filters/underline.png', className: undefined },
//                 },
//                 list: {
//                     inDropdown: false,
//                     options: ['ordered', 'unordered' ],
//                     // ordered: {icon:'assets/icons/filters/underList.png', className: undefined },
//                     // unordered: {icon:'assets/icons/filters/numberLis.png', className: undefined },
//                 },
//                 textAlign: {
//                     inDropdown: false,
//                     options: ['left', 'center', 'right'],
//                     // left:{icon:'assets/icons/filters/leftAlign.png', className: undefined },
//                     // center:{icon:'assets/icons/filters/align.png', className: undefined },
//                     // right:{icon:'assets/icons/filters/alignRight.png', className: undefined },
//                 },
//
//                 link: {
//                     inDropdown: false,
//                     options: ['link'],
//                     // link: { icon:'assets/icons/filters/link.png', className: undefined },
//                 },
//
//             }}
//           />
//         )
//     }
// }