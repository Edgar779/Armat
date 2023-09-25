import React, { useState } from "react";
import Carousel from "nuka-carousel";
import { Loader } from "components";
import { FileUploader } from "react-drag-drop-files";
import { CreateEventStyle } from "../../../../organization/fragments/styles";
import { Images, Svg } from "assets";
import { useWindowDimensions } from "utils";

export const UploadImage = ({
                              handleChange,
                              handleClearImg,
                              imgSrc,
                              error,
                              handleSelectIndex,
                              eventInfo,
                              loaderUpload,
                              imgIndex,
                              type
                            }) => {

  const classes = CreateEventStyle();
  const { width } = useWindowDimensions();
  const height = typeof window !== "undefined" && window.innerHeight;
  const size = width > 1439 ? 3 :
    width > 767 ? 2 : 1;
  const [fileAdded, setFileAdded] = useState(null);

  const handleSetIndex = (i) => {
    handleSelectIndex(i);
  };

  const handleDelete = (j, i) => {
    handleClearImg(j, i);
    setFileAdded(null);
  };

  return (
    <div>

      <div>
        <div style={error === "img" ? { borderColor: "#F07379" } : {}} className={classes.dragDropImage}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Carousel
              pauseOnHover={false}
              slidesToShow={size}
              slidesToScroll={size}
              className={type === 'organization' ? classes.carouselWidthOrg : classes.carouselWidth}
              style={{ outline: "none", }}
              renderBottomCenterControls={false}
              renderCenterLeftControls={({ previousSlide }) =>
                imgSrc?.length  ?
                <button className={classes.leftButton} onClick={previousSlide} style={{ marginLeft: "-37px" }}>
                  <img src={Images.PreviouseImage} alt="icon" />
                </button>
                   : ''
              }
              renderCenterRightControls={({ nextSlide }) =>
                imgSrc?.length > size &&
                <button className={classes.leftButton} onClick={nextSlide}>
                  <img src={Images.NextImage} alt="icon" />
                </button>

              }>
              {imgSrc?.length ? (
                imgSrc.map((i, j) => (
                  <div key={j}>
                    <div
                      key={j}
                      className={
                      // eventInfo ? classes.editSelectedImageBorder :
                        classes.selectedImageBorder}
                      style={{ position: "relative", zIndex: "9", borderColor: j === imgIndex ? "#49B776" : "transparent" }}
                    >
                      <div style={{ position: "absolute", right: 5, top: 5, zIndex: 99 }}
                        className={classes.CloseButtonContent}>
                        <button className={classes.CloseButton} onClick={() => handleDelete(j, i)}>
                          <img src={Svg.CloseModal} alt="Close-Modal" />
                        </button>
                      </div>
                      {j === imgIndex &&
                        <div className={
                          // eventInfo ? classes.mainImageEdit :
                          classes.mainImage}>Main Image</div>
                      }
                      <div
                        onClick={() => handleSetIndex(j)}
                        key={j}
                        className={eventInfo ? classes.editEventImage : classes.createEventImage}
                      >
                        <img src={i.url} alt="icon" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div />
              )}
            </Carousel>
          </div>
          <FileUploader
            fileOrFiles={fileAdded}
            multiple={true}
            handleChange={async (file) => {
              handleChange(file);
              setFileAdded(file);
            }} name="file">
            <div className={classes.dragDropBody}>
              {loaderUpload ? (
                <Loader
                  type="ThreeDots"
                  color="#FFFFFF"
                  height={16}
                  width={16}
                  style={{ margin: "10px", padding: "0" }}
                />
              ) : (
                <div>
                  <img src={Svg.graphicIcon} alt="image" />
                </div>
              )}

              <p className={classes.dragDropBodyDrag}>
                Drag & Drop or
                <div className={classes.custom}>
                  <input style={{ display: "none" }} />
                  <i className="fa fa-cloud-upload" /> Select
                </div>
                Images
              </p>
              {error === true ? (
                <p className={classes.dragDropBodyDragSizeError}>Max size must be 2 MB</p>
              ) : (
                <p className={classes.dragDropBodyDragSize}>Max size for each image 2 MB</p>
              )}
            </div>
          </FileUploader>
        </div>
      </div>
    </div>
  );
};
