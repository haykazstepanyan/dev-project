import { Grid, Container } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import Button from "../components/button";
import Banner from "../components/common/Banner";
import { globalStyles } from "../components/styles/styles";
import { contactUsStyles } from "./styles";

function ContactUs() {
  const classes = contactUsStyles();
  const globalClasses = globalStyles();
  return (
    <>
      <Banner name="Contact Us" />
      <div>
        <Container maxWidth="lg" className={globalClasses.featuresSectionStyle}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6} md={6} className={globalClasses.mxAuto}>
              <p className={classes.contactUsTitle}>Contact Us</p>
              <p className={globalClasses.mb30}>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum claram anteposuerit litterarum formas
                human. qui sequitur mutationem consuetudium lectorum. Mirum est
                notare quam
              </p>
              <div className={classes.contactUsMainInfo}>
                <p>
                  <BusinessIcon />
                  <span>Address : No 40 Baria Sreet 133/2 NewYork City</span>
                </p>
                <p>
                  <MailIcon />
                  <span>
                    <a href="mailto:demo@example.com">demo@example.com</a>
                  </span>
                </p>
                <p>
                  <LocalPhoneIcon />
                  <span>
                    <a href="tel:+0123456789">+0123456789</a>
                  </span>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} lg={6} md={6} className={globalClasses.mxAuto}>
              <p className={classes.contactUsTitle}>Tell Us Your Project</p>
              <div className={classes.contactUsForm}>
                <div>
                  <label htmlFor="name">
                    Your Name (required)
                    <input id="name" placeholder="Name *" type="text" />
                  </label>
                </div>
                <div>
                  <label htmlFor="email">
                    Your Email (required)
                    <input id="email" placeholder="Email *" type="email" />
                  </label>
                </div>
                <div>
                  <label htmlFor="subject">
                    Subject
                    <input id="subject" placeholder="Subject *" type="text" />
                  </label>
                </div>
                <div>
                  <label htmlFor="msg">
                    Your Message
                    <textarea id="msg" placeholder="Message *" />
                  </label>
                </div>
                <Button type="secondary" disableRipple>
                  Send
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default ContactUs;
