import React from 'react';
import {withStyles} from '@material-ui/core';
import {useStyles} from './styles';
import {connect} from 'react-redux';
import {MaxWidthModal} from 'components';
import {Editor} from './core';
import {UserAvatar} from '../profile/core';
import axios from "axios";

export class UploadAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            zoom: 1.5,
            croppedImg: this.props.info ? this.props.info.avatar && this.props.info.avatar.thumbUrl : '',
            openModal: false,
            actionType: '',
            userInfo: this.props.info ? this.props.info : '',
            example: ''
        };
    }

    change = async (e) => {
        try {
            const image = e.target.files[0];
            this.setState({
                openModal: !this.state.openModal,
                img: URL.createObjectURL(image),
                example: e.target.files[0]
            },);
        } catch (error) {}
    };

    handleSave = async () => {
        try {
            if (this.editor) {
                const canvasScaled = this.editor.getImageScaledToCanvas();
                const croppedImg = canvasScaled.toDataURL(); // base64
                this.setState({croppedImg: croppedImg});
                const blob = await fetch(croppedImg).then((res) => res.blob());
                const newFile = new File([blob], 'avatar')
                const formData = new FormData();
                formData.append('files', newFile);
                const endpoint = `/files/upload?includeThumbnail=true`;

                const res = axios.post(endpoint, formData, {auth: true}).then(
                    (res) => {
                        if (this.props.type === 'organization') {
                            const avatar =
                                this.props.orgInfo.id ?
                                    {
                                        changeAvatar: {
                                            "id": res.data.id,
                                            "url": res.data.url,
                                            "thumbUrl": res.data.thumbUrl
                                        }
                                    }
                                    :
                                    {
                                        avatar: {
                                            "id": res.data.id,
                                            "url": res.data.url,
                                            "thumbUrl": res.data.thumbUrl
                                        }
                                    }
                            this.props.handleSendPhoto && this.props.handleSendPhoto(avatar)
                        } else {
                            const avatar =
                                {
                                    changeAvatar: {
                                        "id": res.data.id,
                                        "url": res.data.url,
                                        "thumbUrl": res.data.thumbUrl
                                    }
                                }
                            axios.patch('/users', avatar, {auth: true}).then(
                                axios.get('/users/myProfile', {auth: true}).then(
                                    (res) => {
                                        localStorage.setItem('userInfo', JSON.stringify(res.data))
                                    }
                                ).catch((e) => console.log(e))
                            ).catch()
                        }
                    }
                ).catch((e) => console.log(e))
                this.setState({openModal: !this.state.openModal});
                return res;
            }
        } catch (error) {
        }
    };

    handleClose = () => {
        this.setState({openModal: !this.state.openModal});
    };

    setEditorRef = (editor) => {
        this.editor = editor;
    };

    ref = React.createRef();
    handleUpload = () => {
        const node = this.ref.current;
        node.click();
        node.addEventListener('change', this.change);
    };
    handleZoomSlider = (e) => {
        this.setState({zoom: e.target.value});
    };

    handleRemove = () => {
        this.setState({croppedImg: ''})
        const avatar = {removeAvatar: true,}
        this.props.handleSendPhoto && this.props.handleSendPhoto(avatar)
    }

    render() {
        const {classes, type} = this.props;

        return (
            <div>
                <UserAvatar
                    handleRemove={this.handleRemove}
                    type={type}
                    image={
                        type === 'organization' ? this.state.croppedImg :
                            this.state.croppedImg ? this.state.croppedImg :
                                this.props.info && this.props.info.avatar ? this.props.info.avatar.url :
                                    ''}
                    handleClick={this.handleUpload}/>

                <form encType="multipart/form-data" method="post">
                    <input
                        onClick={event => event.target.value = null}
                        ref={this.ref}
                        type="file"
                        id="file"
                        accept=".png, .jpg, .jpeg"
                        style={{display: 'none'}}
                    />
                </form>
                {this.state.openModal ? (
                    <MaxWidthModal
                        modal={this.state.openModal}
                        styles={{maxWidth: '400px', width: '100%'}}
                        handleClose={this.handleClose}
                        closeButton={false}>
                        <Editor
                            editor={this.setEditorRef}
                            cancel={this.handleClose}
                            save={this.handleSave}
                            img={this.state.img}
                            zoom={this.state.zoom}
                            handleZoomSlider={this.handleZoomSlider}
                        />
                    </MaxWidthModal>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    avatarUrl: state.profile.avatarUrl,
});

const mapDispatchToProps = (dispatch) => {
    return {};

};

const withSt = withStyles({useStyles}, {withTheme: true})(UploadAvatar);
export default connect(mapStateToProps, mapDispatchToProps)(withSt);
