import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Card from "./Card";

describe("Card Component", () => {
  // Smoke test
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card title="title" content="content" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snapshot
  it("renders UI as expected", () => {
    const tree = renderer
      .create(<Card title="title" content="content" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
