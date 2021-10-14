import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "8rem",
    backgroundColor: "#0F00FF",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: "2rem",
    color: "white",
    fontWeight: 600,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.heading}>ICP Student Record System</div>
    </div>
  );
};

export default Header;
