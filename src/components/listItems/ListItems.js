import React, { useState } from "react";
import MuiList from "@mui/material/List";
import MuiListItem from "@mui/material/ListItem";
import MuiListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useToggle } from "../hooks/hooks";
import { listStyles } from "./styles";

const ListItems = ({ list }) => {
  const [checked, setChecked] = useState([]);
  const [showMore, setShowMore] = useToggle();
  const classes = listStyles();

  const handleMoreToggle = () => {
    setShowMore((showMore) => !showMore);
  };

  const handleCheckboxToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const listToShow = showMore ? list : list.slice(0, 4);

  return (
    <>
      <MuiList role="list" className={classes.list}>
        {listToShow.map((value) => (
          <MuiListItem
            key={value}
            role="listitem"
            button
            onClick={handleCheckboxToggle(value)}
            disableRipple
            className={classes.listItems}
          >
            <Checkbox
              checked={checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
              className={classes.listCheckbox}
            />
            <MuiListItemText primary={value} />
          </MuiListItem>
        ))}
      </MuiList>
      <span className={classes.moreLess} onClick={handleMoreToggle}>
        {showMore ? "Less..." : "More..."}
      </span>
    </>
  );
};

export default ListItems;
