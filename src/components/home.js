import { Drawer, Hidden, withStyles, Grid } from "@material-ui/core";
import { inject, observer } from "mobx-react";
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
    fontFamily: "Kanit",
    fontWeight: 400
  },
  atrox: {
    color: "#de143c"
  },
  subtitle: {
    color: "white",
    fontSize: "2em",
    fontFamily: "Kanit",
    fontWeight: 300
  }
};

@inject("authStore")
@observer
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
          <Grid container justify="center" alignItems="center" className={classes.container}>
            <Grid item>
              <h1 className={classes.headline}>ULTIMATE CUP <span className={classes.atrox}>ATROX</span></h1>
              <h2 className={classes.subtitle}>AS FIERCE AS FIRE</h2>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default Home;
