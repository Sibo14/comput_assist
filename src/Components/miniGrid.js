import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import { Button, Card } from "@material-ui/core";
import ApiExample from "./ApiExample";
import Carousel from "react-elastic-carousel";

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
      <Grid container xs={12} spacing={6}>
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

      <div>
        <Carousel style={{ width: "350px" }} className={classes.carouselSpace}>
          <img src="images/comput.png" />
          <img src="images/pharmarcy.png" />
          <img src="images/comput.png" />
        </Carousel>
      </div>
    </div>
  );
}
