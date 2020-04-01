
import React from "react";
import Card from "./Card";
import "../css/List.css";

export default function List(props) {
  const cards = props.cards.map((card, i) => {
    return (
      <Card
        title={card.title}
        content={card.content}
        key={card.id}
        id={card.id}
        handleDeleteCard={props.handleDeleteCard}
      />
    );
  });
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header} list</h2>
      </header>
      <div className="List-cards">
        {cards}
        <button
          type="button"
          onClick={() => props.handleAddRandomCard(props.id)}
          className="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}