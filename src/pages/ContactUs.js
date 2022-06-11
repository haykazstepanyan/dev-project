import { Grid, Container } from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

import Button from "../components/button";
import React from "react";

import { globalStyles } from "../components/styles/styles";
import { contactUsStyles } from "./styles";
import Layout from "../layout";
import Banner from "../components/common/Banner";

const ContactUs = () => {
  const classes = contactUsStyles();
  const globalClasses = globalStyles();
  return (
    <Layout>
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
                  <label>Your Name (required)</label>
                  <div>
                    <input placeholder="Name *" type="text" />
                  </div>
                </div>
                <div>
                  <label>Your Email (required)</label>
                  <div>
                    <input placeholder="Email *" type="email" />
                  </div>
                </div>
                <div>
                  <label>Subject</label>
                  <div>
                    <input placeholder="Subject *" type="text" />
                  </div>
                </div>
                <div>
                  <label>Your Message</label>
                  <div>
                    <textarea placeholder="Message *" />
                  </div>
                </div>
                <Button type="secondary" disableRipple>
                  Send
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default ContactUs;
