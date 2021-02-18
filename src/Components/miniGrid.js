import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

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
      <Grid container xs={12} spacing={1}>
        <Grid item xs={4}>
          <p>Orders</p>
        </Grid>

        <Grid item xs={4}>
          <p>orders</p>
        </Grid>

        <Grid item xs={4}>
          <p>order</p>
        </Grid>
      </Grid>
    </div>
  );
}
