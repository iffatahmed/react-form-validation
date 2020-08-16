import React from "react";

function TextError(props) {
  return (
    <div>
      <span className="error-redCircle"></span>{" "}
      <span className="error">{props.children}</span>
    </div>
  );
}

export default TextError;
