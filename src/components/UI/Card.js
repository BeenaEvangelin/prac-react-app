import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div>
      <span className={classes.tags}>
        {props.tags.map((color) => (
          <div
            key={color}
            className={classes.tag}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </span>
      <div className={classes.card}>{props.children}</div>
    </div>
  );
};
export default Card;
