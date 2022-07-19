import PropTypes from "prop-types";
import {
  List as MuiList,
  ListItem as MuiListItem,
  ListItemText as MuiListItemText,
  Checkbox,
} from "@mui/material";
import useToggle from "../../hooks/useToggle";
import { listStyles } from "./styles";

function ListItems({ list, checkBoxChange, selected }) {
  const [showMore, setShowMore] = useToggle();
  const classes = listStyles();

  const listToShow = showMore ? list : list.slice(0, 4);

  return (
    <>
      <MuiList role="list" className={classes.list}>
        {listToShow.map(({ id, name }) => (
          <MuiListItem
            key={id}
            role="listitem"
            button
            onClick={() => checkBoxChange(id)}
            disableRipple
            className={classes.listItems}
          >
            <Checkbox
              checked={selected.indexOf(id) !== -1}
              tabIndex={-1}
              disableRipple
              className={classes.listCheckbox}
            />
            <MuiListItemText primary={name} />
          </MuiListItem>
        ))}
      </MuiList>
      <div
        role="button"
        tabIndex={0}
        className={classes.moreLess}
        onClick={() => setShowMore()}
        onKeyDown={() => setShowMore()}
      >
        {showMore ? "Less..." : "More..."}
      </div>
    </>
  );
}

ListItems.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ),
  checkBoxChange: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.number),
};

export default ListItems;
