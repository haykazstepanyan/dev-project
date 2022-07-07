import { createUseStyles } from "react-jss";
import { Container, Grid } from "@mui/material";
import OpeningTime from "./OpeningTime";
import Information from "./Information";
import MyAccount from "./MyAccount";
import CustomerService from "./CustomerService";
import ContactLinks from "./ContactLinks";
import styles from "./styles";

const useStyles = createUseStyles(styles);

function FooterTop() {
  const classes = useStyles();

  return (
    <div className={classes.footerTop}>
      <Container maxWidth="lg">
        <Grid
          className={classes.footerGrid}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item sm={4} xs={12} className={classes.gridRow}>
            <OpeningTime />
            <Information />
          </Grid>
          <Grid
            item
            sm={4}
            xs={12}
            className={`${classes.gridRow} ${classes.gridRowLogo}`}
          >
            <ContactLinks />
          </Grid>
          <Grid
            item
            sm={4}
            xs={12}
            className={`${classes.gridRow} ${classes.rightGrid}`}
          >
            <MyAccount />
            <CustomerService />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FooterTop;
