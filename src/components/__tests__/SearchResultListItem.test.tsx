import { mockGeocodingResponse } from "../../utils/api.mocks";
import { fireEvent, render, screen } from "../../utils/testUtils";
import SearchResultItem from "../SearchResultItem";

describe("SearchResultListItem", () => {
  it("renders expected UI", async () => {
    render(
      <SearchResultItem
        locationResult={mockGeocodingResponse[0]}
        setQuery={jest.fn()}
      />
    );

    expect(screen.getByLabelText("search result")).toHaveTextContent(
      "📍 London (England,GB)"
    );
  });

  it("updates the location in the store and resets the search term when search result is pressed", async () => {
    const setQueryMock = jest.fn();
    const { store } = render(
      <SearchResultItem
        locationResult={mockGeocodingResponse[0]}
        setQuery={setQueryMock}
      />
    );

    const searchItemPressable = screen.getByLabelText("press search result");

    fireEvent.press(searchItemPressable);

    expect(setQueryMock).toHaveBeenCalledWith("");
    expect(store.getState().location).toEqual({
      country: "GB",
      lat: 51.5073219,
      local_names: { ar: "لندن", en: "London", ru: "Лондон" },
      lon: -0.1276474,
      name: "London",
      state: "England",
    });
  });
});
