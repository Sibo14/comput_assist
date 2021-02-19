import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },

  test: {
    marginTop: "250px",
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
          <IconButton>
            <Badge>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <h1>Orders</h1>
        </Grid>

        <Grid item xs={4}>
          <h1>Messages</h1>
        </Grid>

        <Grid item xs={4}>
          <h1>Maintance</h1>
        </Grid>
      </Grid>

      <Grid container xs={12} spacing={1}>
        <Grid item xs={4}>
          <h1>Pharmacy Shop</h1>
        </Grid>

        <Grid item xs={4}>
          <h1>Reports</h1>
        </Grid>

        <Grid item xs={4}>
          <h1>Communities</h1>
        </Grid>
      </Grid>
    </div>
  );
}
