import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Navbar from "./Navbar";
import { ClickableDropdown } from "../../components/dropdown";
import { headerStyles } from "./styles";

function StickyHeader() {
  const classes = headerStyles();
  const categories = useSelector((state) => state.categories.categories);

  const categoriesArray = categories.map((category) => ({
    id: category.id,
    name: category.name,
    item: (
      <Link
        to={`/shop?category=${category.id}`}
        className={classes.categoryLinks}
        key={category.id}
      >
        {category.name}
      </Link>
    ),
  }));

  return (
    <div className={`${classes.headerParts} ${classes.stickyLine}`}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={3} className={classes.bottomCategories}>
            <ClickableDropdown
              options={categoriesArray}
              icon={<FormatListBulletedIcon />}
              value="Categories"
              topDistance={5}
            />
          </Grid>
          <Navbar />
        </Grid>
      </Container>
    </div>
  );
}

export default StickyHeader;
