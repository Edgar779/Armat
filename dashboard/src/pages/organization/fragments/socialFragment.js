import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateCancel } from "components";
import { organizationActions } from "store";
import { Svg } from "assets";

const reviews = [
  { icon: Svg.GoogleWhite, activeIcon: Svg.GoogleGreen, name: "googlePlaceId", placeholder: "Add Google Place ID" },
  { icon: Svg.YelpWhite, activeIcon: Svg.YelpGreen, name: "yelpBusinessId", placeholder: "Add Yelp Place ID" }
];

const socialMedia = [
  // {icon:Svg.WebsiteWhite, activeIcon: Svg.WebsiteGreen, name:'google', placeholder: 'Add Website URL'},
  { icon: Svg.FacebookWhite, activeIcon: Svg.FacebookGreen, name: "facebook", placeholder: "Add Facebook URL" },
  { icon: Svg.InstagramWhite, activeIcon: Svg.InstagramGreen, name: "instagram", placeholder: "Add Instagram URL" },
  { icon: Svg.TwitterWhite, activeIcon: Svg.TwitterGreen, name: "twitter", placeholder: "Add Twitter URL" },
  { icon: Svg.YoutubeWhite, activeIcon: Svg.YoutubeGreen, name: "youtube", placeholder: "Add Youtube URL" },
  { icon: Svg.GoogleWhite, activeIcon: Svg.GoogleGreen, name: "google", placeholder: "Add Google URL" },
  { icon: Svg.YelpWhite, activeIcon: Svg.YelpGreen, name: "yelp", placeholder: "Add Yelp URL" }
];

export const SocialFragment = ({}) => {
  const { orgSocials } = useSelector((state) => ({
    orgSocials: state.organizations.orgSocials

  }));
  const editActionType = "EDIT_ORGANIZATION_SOCIALS";
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    if (orgSocials) {
      const socialInfo = {};
      orgSocials?.googleReviews ? socialInfo.googlePlaceId = orgSocials?.googleReviews?.entityId : delete socialInfo.googlePlaceId;
      orgSocials?.yelpReviews ? socialInfo.yelpBusinessId = orgSocials?.yelpReviews?.entityId : delete socialInfo.yelpBusinessId;
      orgSocials?.facebookLink ? socialInfo.facebook = orgSocials?.facebookLink : delete socialInfo.facebook;
      orgSocials?.instagramLink ? socialInfo.instagram = orgSocials?.instagramLink : delete socialInfo.instagram;
      orgSocials?.twitterLink ? socialInfo.twitter = orgSocials?.twitterLink : delete socialInfo.twitter;
      orgSocials?.youtubeLink ? socialInfo.youtube = orgSocials?.youtubeLink : delete socialInfo.youtube;
      orgSocials?.googleLink ? socialInfo.google = orgSocials?.googleLink : delete socialInfo.google;
      orgSocials?.yelpLink ? socialInfo.yelp = orgSocials?.yelpLink : delete socialInfo.yelp;
      setInputs(socialInfo);
    }
  }, [orgSocials]);

  const handleChange = (e) => {
    setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleDelete = (name) => {
    const newInputs = {
      ...inputs
    };
    newInputs[name] = null;
    setInputs(newInputs);
  };

  const handleSave = () => {
    const formData = {
      ...inputs
    };
    dispatch(organizationActions.editOrganizationSocial(formData));
  };

  return (
    <>
      <div>
        <div className="subtitle-box">
          <h3 className="subtitle">Connect Reviews</h3>
          <p className="paragraph">
            Add the google place ID or the yelp business ID of the organization to display reviews from these
            platforms.
          </p>
        </div>
        <div className="reviews-inputs">
          {reviews?.map((i, j) => (
            <div className="connect-box" key={j}>
              <div className="social-icon" style={{ background: inputs?.[i?.name]?.length > 0 ? "#49B776" : "" }}>
                <img src={inputs?.[i?.name]?.length > 0 ? i?.icon : i?.activeIcon} alt="icon" />
              </div>
              <input
                type={"text"}
                className="social-input"
                name={i?.name}
                placeholder={i?.placeholder}
                value={inputs?.[i?.name]}
                onChange={handleChange}
              />
              <div className="social-delete">
                <button type="button" className="btn-delete" onClick={() => handleDelete(i?.name)}>
                  <img src={inputs?.[i?.name]?.length > 0 ? Svg.DeleteRed : Svg.DeleteBlack} alt="Delete icon" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="subtitle-box">
          <h3 className="subtitle">Social Media Links</h3>
          <p className="paragraph">
            Connect the social media profiles of the organization to Armat by simply copying the links.
          </p>
        </div>

        <div className="links-input">
          {socialMedia?.map((i, j) => (
            <div className="connect-box" key={j}>
              <div className="social-icon" style={{ background: inputs?.[i?.name]?.length > 0 ? "#49B776" : "" }}>
                <img src={inputs?.[i?.name]?.length > 0 ? i?.icon : i?.activeIcon} alt="icon" />
              </div>
              <input
                type={"text"}
                className="social-input"
                name={i?.name}
                placeholder={i?.placeholder}
                value={inputs?.[i?.name] ? inputs?.[i?.name] : ""}
                onChange={handleChange}
              />
              <div className="social-delete">
                <button type="button" className="btn-delete" onClick={() => handleDelete(i?.name)}>
                  <img src={inputs?.[i?.name]?.length > 0 ? Svg.DeleteRed : Svg.DeleteBlack} alt="Delete icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="info-feature">
        <div className="info-brn">
          <CreateCancel title="Save" actionType={editActionType} handleSubmit={handleSave} />
        </div>
      </div>
    </>
  );
};
