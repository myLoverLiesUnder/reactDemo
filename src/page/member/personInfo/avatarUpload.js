import React from 'react';
import avatarCss from '../../../css/custom.css'
import {Icon, message, Upload} from 'antd'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

export default class AvatarUpload extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: false
        }
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    };

    render() {
        const imageUrl = this.state.imageUrl;

        const uploadButton = (
            <div style={{margin:'20px'}}>
                <Icon type={this.state.loading ? 'loading' : 'plus'}/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <div className={avatarCss.avatarMain}>
                <div className={avatarCss.avatar}>
                    <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" width="200px"
                         height="200px"
                         alt="example"/>
                </div>
                <div className={avatarCss.avatarSelect}>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="//jsonplaceholder.typicode.com/posts/"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                    >
                        <div>
                            <Icon type={this.state.loading ? 'loading' : 'plus'}/>
                            <div className="ant-upload-text">Upload</div>
                        </div>
                    </Upload>
                </div>
            </div>
        )
    }
}