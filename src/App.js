import React from "react";
import List from "./components/List";

function App({store}) {
  const list = store.lists.map(list => {
    const cards = list.cardIds.map(cardId => store.allCards[cardId])
    return (
      <List
        header={list.header}
        cards={cards}
        key={list.cardIds}
      />
    );
  });
  console.log(list)
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      {list}
      </div>
    </main>
  );
}

export default App;
