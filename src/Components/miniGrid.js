import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import { Button, Card, Typography } from "@material-ui/core";
import ApiExample from "./ApiExample";
import Carousel from "react-elastic-carousel";
import Badge from "@material-ui/core/Badge";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PrintIcon from "@material-ui/icons/Print";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 80,
    width: 80,
  },
  control: {
    padding: theme.spacing(2),
  },

  test: {
    marginTop: "25px",
    marginLeft: "5px",
  },

  buttonPad: {
    paddingLeft: "5px",
  },

  carouselSpace: {
    marginTop: "55px",
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div className={classes.test}>
      <div>
        <Grid
          style={{
            justifyContent: "center",
            fontSize: "small",
            marginBottom: "5px",
          }}
          container
          xs={12}
          spacing={6}
        >
          <Grid item>
            <Badge>
              <PhoneIcon />
              <Typography>+277990856</Typography>
            </Badge>
          </Grid>
          <Grid item>
            <Badge>
              <WhatsAppIcon />
              <Typography>+277990856</Typography>
            </Badge>
          </Grid>
        </Grid>
        <Grid
          style={{
            justifyContent: "center",
            fontSize: "8px",
            marginBottom: "20px",
          }}
          container
          xs={12}
          spacing={1}
        >
          <Grid item>
            <Badge>
              <PrintIcon />
              <Typography>+277990856</Typography>
            </Badge>
          </Grid>
          <Grid item>
            <Badge>
              <AlternateEmailIcon />
              <Typography>ComputAssist@gmail.com</Typography>
            </Badge>
          </Grid>
        </Grid>
      </div>

      <Router>
        <Route path="/ApiExample" component={ApiExample} />
        <Grid className={classes.buttonPad} container xs={12} spacing={6}>
          <Grid item xs={6}>
            <Button variant="contained" color="primary">
              User List
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary">
              Live Chat
            </Button>
          </Grid>
        </Grid>
      </Router>
      <div>
        <Carousel style={{ width: "350px" }} className={classes.carouselSpace}>
          <img style={{ height: "80px" }} src="images/pharmarcy.png" />
          <img style={{ height: "80px" }} src="images/getstarted.jpg" />
          <img style={{ height: "100px" }} src="images/comput.png" />
        </Carousel>
      </div>
    </div>
  );
}
