import { render, screen } from "../../utils/testUtils";
import SearchResultList from "../SearchResultList";

describe("SearchResultList", () => {
  it("renders the search result list correctly", async () => {
    render(<SearchResultList query="London" setQuery={jest.fn()} />);

    expect(
      await screen.findByLabelText("search result list")
    ).toBeOnTheScreen();
  });
});
