import { Container, Grid, Typography } from "@mui/material";
// import Information from "./Information";
import SocialLinks from "./SocialLinks";
import footerStyles from "./styles";
import Sections from "./Sections";
import { infoData, accountData, customerData } from "./constants";

function FooterTop() {
  const classes = footerStyles();

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
            <div className={classes.widgetsContainer}>
              <Typography variant="h3" className={classes.rowHeading}>
                Opening Time
              </Typography>
              <p>
                <span>Mon - Fri:</span> 8 AM - 10 PM
              </p>
              <p>
                <span>Sat:</span> 9 AM - 8 PM
              </p>
              <p>
                <span>Suns:</span> 14 PM - 18 PM
              </p>
            </div>
            <div className={classes.infoContainer}>
              <Sections heading="INFORMATION" data={infoData} />
            </div>
          </Grid>
          <Grid
            item
            sm={4}
            xs={12}
            className={`${classes.gridRow} ${classes.gridRowLogo}`}
          >
            <SocialLinks />
          </Grid>
          <Grid
            item
            sm={4}
            xs={12}
            className={`${classes.gridRow} ${classes.rightGrid}`}
          >
            <div className={classes.infoContainer}>
              <Sections heading="MY ACCOUNT" data={accountData} />
            </div>
            <div className={classes.infoContainer}>
              <Sections heading="CUSTOMER SERVICE" data={customerData} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FooterTop;
