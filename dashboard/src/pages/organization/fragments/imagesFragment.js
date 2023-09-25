import React, { useEffect, useState } from "react";
import { CreateCancel, Loader, MinLoader, SwiperCarusle } from "components";
import { Images } from "assets";
import { Grid } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import { UploadImage } from "../../events/fragments/modals/core/uploadImage";
import { useDispatch } from "react-redux";
import axios from "axios";
import { httpRequestsOnLoadActions, organizationActions } from "store";

const fileTypes = ["JPEG", "PNG", "GIF"];

export const ImagesFragment = ({ orgById, editActionType }) => {
  const dispatch = useDispatch();


  const [img, setImg] = useState([]);
  const [imgPush, setImgPush] = useState([]);
  const [imgIndex, setIndex] = useState(0);
  const [deletedImg, setDeletedImg] = useState([]);
  const [error, setError] = useState([]);
  const [file, setFile] = useState(null);

  const [loaderUpload, setLoaderUpload] = useState([]);
  const [loaderLogo, setLoaderLogo] = useState(false);
  const [logo, setLogo] = useState(null);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    if (orgById?.mainImage) {
      setIndex(orgById.mainImage);
    }
    if (orgById?.images?.length) {
      setImg(orgById?.images);
    }
    if (orgById?.avatar?.id) {
      setLogo(orgById?.avatar?.url);
    }
  }, [orgById]);

  const handleClearImg = (key, item) => {
    setIndex(0);
    const deletedImages = [...imgPush];
    deletedImages.splice(key, 1);
    setImgPush(deletedImages);
    const deletedImagesFile = [...img];
    deletedImagesFile.splice(key, 1);
    setImg(deletedImagesFile);
    const newArr = [...deletedImg, item];
    setDeletedImg(newArr);
  };

  const handleFileChange = (e) => {
    const newArr = [...img];
    const imageArr = [...imgPush];
    for (let item of e) {
      if (item && item.size > 2097152) {
        setError(true);
      } else {
        setError("");
        newArr.push({
          url: URL.createObjectURL(new File([item], "image", { type: "text/json;charset=utf-8" })),
          id: newArr.length + 1
        });
        setImg(newArr);
        imageArr.push(new File([item], `img${newArr.length + 1}`));
        setImgPush(imageArr);
      }
    }
  };

  const handleChangeImages = async (file) => {
    if (file) {
      if (file?.size > 2097152) {
        setError(true);
      } else {
        const formData = new FormData();
        const endpoint = `/files/upload`;
        setLoaderLogo(true);
        formData.append("files", file);
        setLogo(URL.createObjectURL(new File([file], "image", { type: "text/json;charset=utf-8" })));
        await axios.post(endpoint, formData, { auth: true })
          .then((res) => {
            setFile({
              ...res.data,
              thumbUrl: res?.data?.url
            });
            setLoaderLogo(true);
            return res.data;
          })
          .catch(() => setLoaderLogo(true));
        setError("");
      }
    }
  };

  const removeLogo = () => {
    setLogo(null);
    setRemove(true);
  };

  const sendData = async () => {
    const formData = new FormData();
    const endpoint = `/files/uploadMany?includeThumbnail=true`;
    imgPush.length && imgPush.map((i) => formData.append("files", i));
    dispatch(httpRequestsOnLoadActions.appendLoading("EDIT_ORGANIZATION"));
    const uploadedImg = imgPush.length && (setLoaderUpload(true),
      await axios.post(endpoint, formData, { auth: true })
        .then((res) => {
          setLoaderUpload(false);
          return res.data;
        })
        .catch(() => setLoaderUpload(false)));

    const editDate = {};
    uploadedImg ? (editDate["imagesToAdd"] = [...uploadedImg]) : delete editDate.imagesToAdd;
    deletedImg?.length ? (editDate["imagesToRemove"] = [...deletedImg]) : delete editDate.imagesToRemove;
    uploadedImg ? (editDate["mainImage"] = +imgIndex) : delete editDate.mainImage;
    if (file) {
      file ? editDate["changeAvatar"] = file : delete editDate.changeAvatar;
    }
    if (remove && !file) {
      editDate["removeAvatar"] = true;
    }
    dispatch(organizationActions.editOrganization(orgById?.id, editDate));
  };

  return (
    <>
      <div className="subtitle-box">
        <h3 className="subtitle">Upload a Logo</h3>
        <p className="paragraph">
          The logo is displayed in may areas throughout Armat.org and let’s users visually identify the
          organization.
        </p>
      </div>
      <div className="upload-logo-wrapper">
        <div className="upload-logo-image-wrapper">
          {logo ?
            <div className="no-uploaded-image">
              <img src={logo} alt="Upload Logo" className={"uploaded-logo"} />
              <div className="title-box">
                <button type="button" className="remove-logo" onClick={removeLogo}>
                  Remove Logo
                </button>
                <FileUploader multiple={false} handleChange={handleChangeImages} name="carouselFile" types={fileTypes}>
                  <button type="button" className="change-logo">
                    Change Logo
                  </button>
                </FileUploader>
              </div>
            </div>
            :
            <>
              <div className="title-box">
                <FileUploader multiple={false} handleChange={handleChangeImages} name="carouselFile" types={fileTypes}>
                  <div className="no-uploaded-image">
                    <img src={Images.UploadLogo} alt="Upload Logo" className="no-uploaded-logo" />
                    <div>
                      <span className="text-green"> Upload </span>
                      <span className="text-black"> Logo</span>
                    </div>
                  </div>
                </FileUploader>
              </div>
              <div className="paragraph-box">
                <p> Try uploading a high resolution logo that is small in size. </p>
              </div>
            </>
          }
        </div>
      </div>
      <div className="banner-box">
        <h4 className="subtitle">Organization Images</h4>
        <p className="paragraph">
          Images will be visible in a gallery and in other parts of Armat. The main image is used when displaying
          the
          organization in lists and as the face image of the organization.
        </p>
      </div>
      <div id="graphic">
        <UploadImage
          imgIndex={imgIndex}
          loaderUpload={false}
          eventInfo={null}
          // eventInfo={eventInfo}
          handleSelectIndex={(i) => setIndex(i)}
          error={error}
          handleClearImg={handleClearImg}
          handleChange={handleFileChange}
          imgSrc={img}
          type={"organization"}
        />
      </div>
      <div className="info-feature">
        <div className="info-brn">
          <CreateCancel
            title="Save"
            handleSubmit={sendData}
            actionType={"EDIT_ORGANIZATION"}
          />
        </div>
      </div>
    </>
  );
};
