import { rest } from "msw";
import { server } from "../../mocks/server";
import { GEO_BASE_URL } from "../../utils/api";
import { render, screen } from "../../utils/testUtils";
import SearchResultList from "../SearchResultList";

describe("SearchResultList", () => {
  it("renders the search result list correctly", async () => {
    render(<SearchResultList query="London" setQuery={jest.fn()} />);

    expect(
      await screen.findByLabelText("search result list")
    ).toBeOnTheScreen();
  });

  it("does not execute the query when query length is less than 3", () => {
    render(<SearchResultList query="Lo" setQuery={jest.fn()} />);

    expect(screen.queryAllByLabelText("search result")).toHaveLength(0);
  });

  it("renders the skeleton when fetching and query length is >= 3", async () => {
    render(<SearchResultList query="Lon" setQuery={jest.fn()} />);

    expect(screen.getByLabelText("search result list skeleton")).toBeVisible();
  });

  it("renders the error message when status is error", async () => {
    server.use(
      rest.get(GEO_BASE_URL, (_req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    render(<SearchResultList query="Lon" setQuery={jest.fn()} />);

    expect(await screen.findByLabelText("error message")).toHaveTextContent(
      "Cannot load locations. Please try again later"
    );
  });

  it("renders the FlatList with correct data when status is success", async () => {
    render(<SearchResultList query="Lon" setQuery={jest.fn()} />);

    expect(await screen.findByLabelText("search result list")).toBeVisible();

    const resultItems = screen.queryAllByLabelText("search result");
    expect(resultItems).toHaveLength(5);
  });
});
