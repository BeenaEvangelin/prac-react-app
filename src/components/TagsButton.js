import React from "react";
import classes from "./TagsButton.module.css";
import { Fragment } from "react";

const allTagColors = ["red", "blue", "green", "yellow", "pink", "cyan"];

const TagsButton = (props) => {
  return (
    <Fragment>
      <div className={classes.tags}>
        {allTagColors.map((color) => (
          <div
            style={{ backgroundColor: color }}
            onClick={() => {
              props.selectColor(color);
            }}
            className={classes.tag}
          >
            {color}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default TagsButton;
