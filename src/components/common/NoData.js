import { globalStyles } from "../styles/styles";
import nothingToShowImg from "../../assets/images/nothing-to-show.png";

function NoData() {
  const globalClasses = globalStyles();
  return (
    <div className={globalClasses.noData}>
      <img src={nothingToShowImg} alt="no-data" />
      <h2>Sorry, there is nothing to show!</h2>
    </div>
  );
}

export default NoData;
