import React from "react";

function Button(props) {
  return (
    <a className="button" href={props.link}>
      {props.name}
    </a>
  );
}

export default Button;
