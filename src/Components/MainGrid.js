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
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
    marginTop: "30px",
  },
  root1: {
    maxWidth: 345,
  },
  media: {
    height: 140,
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
          <Card className={classes.root1}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="images/winter.png"
                title="Orders"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Orders
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  New orders,open existing orders,sales usage and more
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root1}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/components/images/winter.png"
                title="Messages"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Messages
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Response: 27
                  <br />
                  Supplier Message: 0
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root1}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/components/images/winter.png"
                title="Maintainance"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Maintenance
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Product updates,
                  <br />
                  database backup and update notes
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container xs={12} spacing={1}>
        <Grid item xs={4}>
          <h1>Pharmacy Shop</h1>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root1}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/components/images/winter.png"
                title="Reports"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Reports
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  View top products, supplier usage and more.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root1}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/components/images/winter.png"
                title="Communications"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Communications
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Select and send all completed orders
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
