import {
  Drawer,
  Hidden,
  withStyles,
  Grid,
  Typography,
  Button
} from "@material-ui/core";
import React from "react";
import backgroundPic from "../images/back.jpg";
import logo from "../images/logo3.png";

const styles = {
  background: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundPic})`,
    height: "100vh",
    backgroundSize: "cover",
    display: "flex"
  },
  drawerPaper: {
    background: "#18191d",
    width: "15vw",
    position: "relative"
  },
  logoSpace: {
    background: "#141519",
    height: "16%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    height: "50%",
    width: "auto",
    flexBasis: "2"
  },
  content: {
    flexGrow: 1
  },
  container: {
    height: "100%"
  },
  headline: {
    fontSize: "4.5em",
    color: "white",
    fontWeight: 520,
    letterSpacing: ".25rem"
  },
  atrox: {
    color: "#de143c"
  },
  subtitle: {
    color: "white",
    fontSize: "1.8em",
    textAlign: "center",
    fontWeight: 200,
    letterSpacing: ".05rem"
  },
  moreButton: {
    color: "#f7d600",
    border: "1px solid #f7d600",
    borderRadius: "0",
    padding: "8px 40px"
  },
  buttonContainer: {
    position: "absolute",
    right: "10%",
    bottom: "5%"
  }
};

@withStyles(styles)
class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.background}>
        <Hidden smDown>
          <Drawer
            variant="permanent"
            open
            classes={{ paper: classes.drawerPaper }}
          >
            <div className={classes.logoSpace}>
              <img src={logo} className={classes.logo} />
            </div>
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.container}
          >
            <Grid item>
              <Typography variant="display4" className={classes.headline}>
                ULTIMATE CUP <span className={classes.atrox}>ATROX</span>
              </Typography>
              <Typography variant="display1" className={classes.subtitle}>
                AS FIERCE AS FIRE
              </Typography>
            </Grid>
          </Grid>
          <div className={classes.buttonContainer}>
            <Button variant="outlined" size="large" className={classes.moreButton}>
              Read More
            </Button>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
