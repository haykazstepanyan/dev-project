import { createUseStyles } from "react-jss";

const adminUsersStyles = createUseStyles({
  tableStyle: {
    "& .editIcon": {
      color: "#24695c",
    },
    "& .settingsIcon": {
      color: "#717171",
    },
    "& .deleteIcon": {
      color: "#d22d3d",
    },
    "& thead th": {
      fontWeight: 600,
    },
  },
});

export { adminUsersStyles };
