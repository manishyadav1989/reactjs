import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import "@testing-library/jest-dom"
import Cart from "../components/Cart";

describe('Should be load cart component', () => {
    it('Should be load restaurant card page', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            </Provider>
        );
        const cards = screen.getAllByTestId('restaurant-card');
        expect(cards.length).toBe(8);
    });

    it('Should be load header component cart', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Body />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.getByText('Cart: (0)')).toBeInTheDocument();
    });

    it('Should be load item into header cart items', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Body />
                </BrowserRouter>
            </Provider>
        );
        const addButton = screen.getAllByRole('button', {name: 'Add Items'});
        fireEvent.click(addButton[0]);
        expect(screen.getByText('Cart: (1)')).toBeInTheDocument();
        fireEvent.click(addButton[1]);
        expect(screen.getByText('Cart: (2)')).toBeInTheDocument();
    });

    it('Should be load item into header cart items with new add', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Body />
                </BrowserRouter>
            </Provider>
        );
        const addButton = screen.getAllByRole('button', {name: 'Add Items'});
        fireEvent.click(addButton[2]);
        expect(screen.getByText('Cart: (3)')).toBeInTheDocument();
    });

    it('Should be load item into cart items', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Cart />
                </BrowserRouter>
            </Provider>
        );
        const cartItems = screen.getAllByTestId('restaurant-card');
        expect(cartItems.length).toBe(3)
    });
});