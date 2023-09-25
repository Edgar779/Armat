import { makeStyles } from "@material-ui/core/styles";

export const noteStyles = makeStyles((theme) => ({
  noeModalWrapper: {
    height: "auto",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "10px",
    "@media (min-width: 320px)": {
      width: "310px",
      padding:'24px 16px',
    },
    "@media (min-width: 768px)": {
      width: "558px",
      padding: 0,
    },
    "@media (min-width: 1920px)": {
      width: "578px"
    }
  },

  title: {
    color: '#2A374E',
    fontWeight: "bold",
    marginBottom: "16px",
    "@media (min-width: 320px)": {
      fontSize: "18px"
    },
    "@media (min-width: 768px)": {
      fontSize: "30px"
    }
  },

  subtitle: {
    color: "#2A374E",
    "@media (min-width: 320px)": {
      fontSize: "14px",
      marginBottom: "30px"
    },

    "@media (min-width: 768px)": {
      fontSize: "16px",
      marginBottom: "40px"
    }
  },

  inputText: {
    height: "140px",
    width: "100% !important",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #9D9D9D",
    borderRadius: "10px",
    padding: "24px",
    resize: "none",
    outline:'none',
    "@media (min-width: 320px)": {
      height: "120px"
    },
    "@media (min-width: 768px)": {
      height: "140px"
    }
  },

  inputSubtitle: {
    fontSize: "12px",
    color: "#545F7E",
    marginLeft: "24px"
  },

  buttons: {
    display: "flex",
    width: "100%",
// width: '100%',
    "@media (min-width: 320px)": {
      marginTop: "30px"
    },
    "@media (min-width: 768px)": {
      marginTop: "40px"
    }
  },

  editButtonWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "16px",
    "& button": {
      display: "flex",
      alignItems: "center",
      border: "none",
      cursor: "pointer",
      background: "none",
      color: "#49B776",
      fontWeight: "600",
      fontSize: "14px",
      "& img": {
        marginRight: "8px"
      }
    }
  }
}));
