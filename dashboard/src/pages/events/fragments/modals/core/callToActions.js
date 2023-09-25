import { useEffect, useState } from "react";
import { Svg } from "assets";
import { cta } from "assets/images";

export const CallToActions = ({ setActions, actions }) => {
  const [inputs, setInputs] = useState({});
  const [clicked, setClicked] = useState({});

  const ctaButtons = [
    { title: "Contact Us", name: "contactUs", icon: cta.contactUs },
    { title: "Send Email", name: "emailUs", icon: cta.sendEmail },
    { title: "Register", name: "register", icon: cta.register },
    { title: "Donate", name: "donate", icon: cta.donate },
    { title: "More Info", name: "string", icon: cta.info },
    { title: "Book Now", name: "bookNow", icon: cta.book }
  ];

  useEffect(() => {
    if (actions) {
      setInputs(actions);
    }
  }, [actions]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));

    const newInputs = {
      ...inputs
    };
    newInputs[e.target.name] = e.target.value;
    setActions(newInputs);
  };

  const handleDelete = (name) => {
    const newInputs = {
      ...inputs
    };
    delete newInputs[name];
    setInputs(newInputs);
    setActions(newInputs);
  };

  return (
    <div style={{ position: "relative" }}>
      {ctaButtons?.map((i, j) => (
        <div className={"cta-button-wrapper"} onClick={() => setClicked(i?.name)}>

          <div style={clicked === i?.name ? { display: "none" } : {}} className="mobile-cta-button">
            <div className="cta-button">
              <img src={i?.icon} alt="icon" />
              <p>{i?.title}</p>
            </div>
          </div>

          <div className="flex" style={{ width: "100%" }}>
            <div className="cta-button">
              <img src={i?.icon} alt="icon" />
              <p className="cta-btn-name">{i?.title}</p>
            </div>
            <input
              type="text"
              className="cta-input"
              onChange={handleChange}
              placeholder={"Add URL"}
              name={i?.name}
              value={inputs?.[i?.name] ? inputs?.[i?.name] : ""}
            />
          </div>
          <div className={"delete-cta"}>
            <button onClick={() => handleDelete(i?.name)} type="button">
              <img src={Svg.trash} alt="icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};