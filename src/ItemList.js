import React from "react";
import "./itemList.scss";
import CompletionBar from "./CompletionBar";
import PlayGraph from "./PlayGraph";
function ItemList(props) {
  return (
      <div className="list-wrapper"> 
        <div className="list-heading">
            <div className="song-desc">
              <p>Sound Items</p>
              <p>Title</p>
            </div>
            <p>Unique Plays & Total Plays</p>
            <p>Completion Rate</p>
        </div>
        {props.items.map((item, index) => (
          <div className="list-outer" key={index}>
            <div className="title">
              <img src={item.image} alt={item.title} />
              <div>{item.title}</div>
            </div>
            <PlayGraph item={item} />
            <CompletionBar item={item.completion_rate} />
          </div>
        ))}
      </div>
  );
}

export default ItemList;
