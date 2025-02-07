import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it('Should be load Header Componenent', ()=>{
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );
    const heading = screen.getByRole('list');
    expect(heading).toBeInTheDocument();
});

it('Should be load Cart Header Componenent', ()=>{
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );
    const heading = screen.getByText('Cart: (0)');
    expect(heading).toBeInTheDocument();
});