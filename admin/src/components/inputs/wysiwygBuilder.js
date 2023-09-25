// import React, { Component } from 'react';
// import { EditorState, convertToRaw, ContentState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { withStyles } from '@material-ui/core';
// // import Icon from '../../icon';
// // import Scrollbars from 'react-custom-scrollbars';
//
// const useStyles = (theme) => ({
//     toolbarWrapper: {
//         backgroundColor: '#387DFF1A',
//         height: '42px',
//         paddingLeft: '32px',
//         paddingRight: '32px',
//         [theme.breakpoints.down('lg')]: {
//             paddingLeft: '32px',
//             paddingRight: '32px',
//             height: '42px',
//         },
//         [theme.breakpoints.down('md')]: {
//             paddingLeft: '32px',
//             paddingRight: '32px',
//             height: '42px',
//         },
//         [theme.breakpoints.down('sm')]: {
//             paddingLeft: '16px',
//             paddingRight: '16px',
//             height: '32px',
//         },
//         [theme.breakpoints.down('xs')]: {
//             paddingLeft: '16px',
//             paddingRight: '16px',
//             height: '32px',
//         },
//     },
//     draftEditor: {
//         root: {
//             margin: '20px',
//             padding: 0,
//         },
//     },
//     inputWrapper: {
//         height: '300px',
//         width: '100%',
//         border: '0.5px solid #387DFF',
//         borderRadius: '6px',
//         overflow: 'hidden',
//         [theme.breakpoints.down('lg')]: {
//             height: '300px',
//         },
//         [theme.breakpoints.down('md')]: {
//             height: '260px',
//         },
//         [theme.breakpoints.down('sm')]: {
//             height: '180px',
//         },
//         [theme.breakpoints.down('xs')]: {
//             height: '150px',
//         },
//     },
//     editorWrapper: {
//         padding: '32px',
//         height: '80%',
//         [theme.breakpoints.up('lg')]: {
//             height: '80%',
//             padding: '32px',
//         },
//         [theme.breakpoints.down('md')]: {
//             height: '80%',
//             padding: '32px',
//         },
//         [theme.breakpoints.up('sm')]: {
//             height: '80%',
//             padding: '16px',
//         },
//         [theme.breakpoints.down('xs')]: {
//             height: '80%',
//             padding: '16px',
//         },
//         overflow: 'auto',
//     },
//
//     display: {
//         borderRight: '1px solid #387DFF',
//         height: '80%',
//     },
//     display1: {
//         borderRight: '1px solid #387DFF',
//         height: '80%',
//     },
//     display2: {
//         borderRight: '1px solid #387DFF',
//         height: '80%',
//     },
//     display3: {
//         //borderRight: '1px solid #387DFF',
//         height: '80%',
//     },
//
//     optionWrapper: {
//         //borderRadius: '4px',
//         padding: '5px',
//         //height: '24px',
//         margin: 0,
//         //width: '24px',
//         borderRadius: '2px',
//         display: 'flex',
//         border: 'none',
//         justifyContent: 'center',
//         alignItems: 'center',
//         background: 'transparent',
//         boxShadow: 'none',
//         [theme.breakpoints.down('md')]: {
//             height: '14px',
//             width: '12px',
//         },
//         [theme.breakpoints.down('sm')]: {
//             height: '14px',
//             width: '12px',
//             margin: '4px',
//             padding: '2px',
//         },
//         [theme.breakpoints.down('xs')]: {
//             height: '14px',
//             width: '12px',
//             margin: '2.5px',
//
//             padding: '0px',
//         },
//         '& .public-DraftStyleDefault-block': {
//             margin: 0,
//         },
//         /* '& img': {
//             width: '80%',
//             height: '80%',
//         },
//         '&:hover': {
//             backgroundColor: '#387DFF1A',
//             background: '#387DFF1A 0% 0% no-repeat padding-box',
//             borderRadius: '4px',
//             boxShadow: 'none',
//         },
//         '&:active': {
//             backgroundColor: '#387DFF',
//             borderRadius: '4px',
//             boxShadow: 'none',
//         },
//         '&:selected': {
//             backgroundColor: '#387DFF',
//             borderRadius: '4px',
//             boxShadow: 'none',
//         },
//     },
//     /* .rdw-option-wrapper:hover {
//         box-shadow: 1px 1px 0px #BFBDBD;
//       }
//       .rdw-option-wrapper:active {
//         box-shadow: 1px 1px 0px #BFBDBD inset;
//       }
//       .rdw-option-active {
//         box-shadow: 1px 1px 0px #BFBDBD inset;
//       }
//       .rdw-option-disabled {
//         opacity: 0.3;
//         cursor: default;
//       } */
//     },
// });
//
// const renderThumb = ({ style, ...props }) => {
//     const thumbStyle = {
//         borderRadius: 5,
//         backgroundColor: '#545F7E80',
//     };
//     return <div style={{ ...style, ...thumbStyle }} {...props} />;
// };
// // const CustomScrollbars = (props) => <Scrollbars renderThumbHorizontal={renderThumb} renderThumbVertical={renderThumb} {...props} />;
//
// export class WysiwygBuilder extends Component {
//     constructor(props) {
//         super(props);
//         //console.log(props.value, 'props.values');
//         const html = props.value;
//         const contentBlock = htmlToDraft(html);
//         if (contentBlock) {
//             const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
//             const editorState = EditorState.createWithContent(contentState);
//             this.state = {
//                 editorState,
//                 preview: false,
//             };
//         }
//     }
//
//     onEditorStateChange = (editorState) => {
//         this.setState({
//             editorState,
//         });
//         this.props.handleChange(draftToHtml(convertToRaw(editorState.getCurrentContent())), this.props.data.machineName);
//     };
//     render() {
//         //console.log(typeof this.props.data.icon, 'dataaaaaa');
//         const { editorState } = this.state;
//         const { label, required } = this.props.data;
//         const { classes } = this.props;
//
//         return (
//             <div className="mt-4">
//                 <Editor
//                     editorState={editorState}
//                     wrapperClassName={classes.inputWrapper}
//                     editorClassName={classes.editorWrapper}
//                     toolbarClassName={classes.toolbarWrapper}
//                     onEditorStateChange={this.onEditorStateChange}
//                     required={required}
//                     placeholder={label}
//                     toolbar={{
//                         options: ['inline', 'list', 'textAlign', 'link'],
//                         inline: {
//                             options: ['bold', 'italic', 'underline'],
//                             className: classes.display,
//                             bold: {
//                                 className: classes.optionWrapper,
//                             },
//                             italic: { /* icon : <Icon name="italicFill" color="#387DFF" />,*/ className: classes.optionWrapper },
//                             underline: { /* icon : <Icon name="underlinedTextFill" color="#387DFF" />,*/ className: classes.optionWrapper },
//                         },
//                         list: {
//                             options: ['unordered', 'ordered'],
//                             className: classes.display1,
//                             unordered: {
//                                 className: classes.optionWrapper,
//                             },
//                             ordered: { className: classes.optionWrapper },
//                         },
//                         textAlign: {
//                             options: ['left', 'center', 'right'],
//                             className: classes.display2,
//                             left: { /* icon : <Icon name="leftAlignFill" color="#387DFF" />,*/ className: classes.optionWrapper },
//                             center: { /* icon : <Icon name="justifyFill" color="#387DFF" />,*/ className: classes.optionWrapper },
//                             right: { /* icon : <Icon name="boldFill" color="#387DFF" />,*/ className: classes.optionWrapper },
//                         },
//                         link: {
//                             defaultTargetOption: '_self',
//                             className: classes.display3,
//                             options: ['link'],
//                             link: { /* icon : <Icon name="linkFill" color="#387DFF"  />,*/ className: classes.optionWrapper },
//                         },
//                     }}
//                 />
//             </div>
//         );
//     }
// }
//
// export default withStyles(useStyles, { withTheme: true })(WysiwygBuilder);
