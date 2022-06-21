import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import OpeningTime from "./OpeningTime";
import Information from "./Information";
import MyAccount from "./MyAccount";
import CustomerService from "./CustomerService";
import ContactLinks from "./ContactLinks";

const useStyles = createUseStyles(styles);

function FooterTop() {
  const classes = useStyles();

  return (
    <div className={classes.footerTop}>
      <Container maxWidth="lg" className={classes.footerContainer}>
        <Grid
          classes={{ root: classes.row }}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item sm={2} className={classes.gridRow}>
            <OpeningTime />
          </Grid>
          <Grid item sm={2} className={classes.gridRow}>
            <Information />
          </Grid>
          <Grid item sm={4} className={classes.gridRow}>
            <ContactLinks />
          </Grid>
          <Grid item sm={2} className={classes.gridRow}>
            <MyAccount />
          </Grid>
          <Grid item sm={2} className={classes.gridRow}>
            <CustomerService />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FooterTop;
