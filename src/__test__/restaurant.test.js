import { render, screen } from "@testing-library/react";
import resData from './../utils/data';
import '@testing-library/jest-dom';
import RestaurantList from "../components/RestaurantList";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

it('Should be load Restaurant Component with Props data', ()=> {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <RestaurantList data={resData[1]}/>
            </Provider>
        </BrowserRouter>
    );
    const name = screen.getByText('Italian bite pizza');
    expect(name).toBeInTheDocument();
}); 