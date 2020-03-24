import React from "react";
import Card from "./Card";
import '../css/List.css'

export default function List(props) {
  const card = props.cards.map((card, i) => {
    return <Card title={card.title} content={card.content} key={i} />;
  });
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header} list</h2>
      </header>
      <div className="List-cards">
        {card}
        <button type="button" className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}
