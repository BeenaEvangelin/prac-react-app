import classes from "./IndividualData.module.css";
import Card from "../../UI/Card";
import { Fragment } from "react";

const IndividualData = (props) => (
  <Fragment>
    <Card tags={props.tags}>
      <div className={classes.container}>
        <div className={classes.individual_data}>
          <div>
            <h1>{props.name}</h1>
          </div>
          <div>
            <img
              src={props.avatar}
              alt={props.avatarAlt}
              className={classes.img}
            />
          </div>
          <div className={classes.description}>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </Card>
  </Fragment>
);

export default IndividualData;
