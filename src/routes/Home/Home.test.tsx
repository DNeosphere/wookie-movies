import React from "react";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";

describe("Posts test suite", () => {
  // Tests not working but I intented to use MSW to handle my mocks and integrate them with react-testing-library
  test("Renders the component with posts", async () => {
    <Routes>
      <Route>
        render(
        <Home />
        );
      </Route>
    </Routes>;

    const postsItems = await screen.findAllByText("Wookie Moovies");

    expect(postsItems).toHaveLength(1);
  });
});
