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
          classes={{ root: classes.row }}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item sm={2}>
            <OpeningTime />
          </Grid>
          <Grid item sm={2}>
            <Information />
          </Grid>
          <Grid item sm={4}>
            <ContactLinks />
          </Grid>
          <Grid item sm={2}>
            <MyAccount />
          </Grid>
          <Grid item sm={2}>
            <CustomerService />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FooterTop;
