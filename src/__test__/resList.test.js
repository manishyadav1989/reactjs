import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import { Provider } from "react-redux";
import store from "../redux/store";

it('Should be Search Body Component', ()=> {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </BrowserRouter>
    );
    const cardsBeforeSearch = screen.getAllByTestId('restaurant-card');
    expect(cardsBeforeSearch.length).toBe(8)
    const searchBtn = screen.getByRole('button', {name: 'Search'});
    const searchInput = screen.getByTestId('searchInput');
    fireEvent.change(searchInput, { target: { value: 'Italian' } });
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId('restaurant-card');
    expect(cards.length).toBe(1);
});