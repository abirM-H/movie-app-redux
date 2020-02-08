import React from "react";

export default function RatingStars(props) {
  let starTab = [];
  for (let i = 0; i < 5; i++) {
    props.rate > i
      ? starTab.push(<span onClick={()=>props.searchRate(i+1)} key={i}>★</span>)
      : starTab.push(<span onClick={()=>props.searchRate(i+1)} key={i}>☆</span>);
  }

  return <div>{starTab}</div>;
}
