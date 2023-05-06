import React from "react";
import "./CompletionBar.scss";
function CompletionBar(props) {
  return (
    <div className="completebar-outer">
      <div className="bar-outer">
          <div style={{width : props.item+'%'}} className="bar-fill">
          </div>
          <div className="filter">
              {props.item}%
          </div>
      </div>
    </div>
  );
}

export default CompletionBar;
