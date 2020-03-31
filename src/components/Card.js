import React from "react";
import '../css/Card.css'

export default function Card(props) {
  return (
    <div className="Card">
      <button onClick={() => props.handleDeleteCard(props.id)}type="button">delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
