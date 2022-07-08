import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import footerStyles from "./styles";

function Sections({ heading, data }) {
  const classes = footerStyles();
  return (
    <>
      <Typography variant="h3" className={classes.rowHeading}>
        {heading}
      </Typography>
      <nav>
        <ul>
          {data.map(({ name, link }) => (
            <li key={link}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

Sections.propTypes = {
  heading: PropTypes.string.isRequired,
  data: PropTypes.arrayOf([PropTypes.objectOf(PropTypes.string)]),
};

export default Sections;
