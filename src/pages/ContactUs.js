import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grid, Container } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Formik } from "formik";
import MailIcon from "@mui/icons-material/Mail";
import Button from "../components/button";
import Banner from "../components/common/Banner";
import Input from "../components/input";
import Textarea from "../components/textarea";
import { globalStyles } from "../components/styles/styles";
import { contactUsStyles } from "./styles";
import useLazyFetch from "../hooks/useLazyFetch";
import { showSnackbar } from "../redux/app/appSlice";
import validations from "./admin/products/validations";

function ContactUs() {
  const classes = contactUsStyles();
  const globalClasses = globalStyles();
  const dispatch = useDispatch();

  const { contactUsValidation } = validations;
  const {
    data: addContactData,
    error: addContactError,
    lazyRefetch: addContact,
  } = useLazyFetch();

  const submitContactUsForm = (values) => {
    addContact(
      "/contacts/contact",
      {
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      },
      "POST",
    );
  };

  useEffect(() => {
    if (addContactData?.data) {
      dispatch(
        showSnackbar({
          snackbarType: "success",
          snackbarMessage: "Message is sent successfully!",
        }),
      );
    }
  }, [addContactData, dispatch]);

  useEffect(() => {
    if (addContactError) {
      dispatch(
        showSnackbar({
          snackbarType: "error",
          snackbarMessage: "Oops! Something went wrong!",
        }),
      );
    }
  }, [addContactError, dispatch]);

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
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={contactUsValidation}
                onSubmit={(values) => submitContactUsForm(values)}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className={classes.contactUsForm}>
                      <div className={globalClasses.mb10}>
                        <Input
                          placeholder="Name *"
                          size="large"
                          borders="square"
                          state="noFocus"
                          htmlFor="name"
                          name="name"
                          type="text"
                          labelValue="Your Name (required)"
                          className={globalClasses.inputStyle}
                          value={values.name}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <div style={{ color: "#d22d3d" }}>
                          {errors.name && touched.name && errors.name}
                        </div>
                      </div>
                      <div className={globalClasses.mb10}>
                        <Input
                          placeholder="Email *"
                          size="large"
                          borders="square"
                          state="noFocus"
                          htmlFor="email"
                          name="email"
                          type="email"
                          labelValue="Your Email (required)"
                          className={globalClasses.inputStyle}
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <div style={{ color: "#d22d3d" }}>
                          {errors.email && touched.email && errors.email}
                        </div>
                      </div>
                      <div className={globalClasses.mb10}>
                        <Input
                          placeholder="Subject *"
                          size="large"
                          borders="square"
                          state="noFocus"
                          htmlFor="subject"
                          labelValue="Subject"
                          type="text"
                          name="subject"
                          className={globalClasses.inputStyle}
                          value={values.subject}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <div style={{ color: "#d22d3d" }}>
                          {errors.subject && touched.subject && errors.subject}
                        </div>
                      </div>
                      <div>
                        <Textarea
                          id="msg"
                          placeholder="Message *"
                          htmlFor="msg"
                          labelValue="Your Message"
                          type="standard"
                          name="message"
                          value={values.message}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <div style={{ color: "#d22d3d" }}>
                          {errors.message && touched.message && errors.message}
                        </div>
                      </div>
                      <Button
                        style={{ marginTop: 20 }}
                        type="submit"
                        disableRipple
                      >
                        Save
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default ContactUs;
