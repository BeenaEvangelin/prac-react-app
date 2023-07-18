import classes from "./IndividualData.module.css";

const IndividualData = (props) => {
  <li>
    <div className={classes.individual_data}>
      <h1>{props.name}</h1>
      <img src={props.imageUrl} alt={props.imageAlt} />
    </div>
    <div className={classes.description}>
      <p>{props.description}</p>
    </div>
  </li>;
};

export default IndividualData;
