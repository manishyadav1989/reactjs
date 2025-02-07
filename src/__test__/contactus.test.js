import { render, screen } from "@testing-library/react";
import Contactus from "../components/Contactus";
import '@testing-library/jest-dom';

describe('ContactUs component load Test', () => {
    it('Should be rendered ContactUs component', () => {
        render(<Contactus />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });

    it('Should be load button inside ContactUs component', () => {
        render(<Contactus />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('Should be load button text inside ContactUs component', () => {
        render(<Contactus />);
        const button = screen.getByText('Submit');
        expect(button).toBeInTheDocument();
    });

    it('Should be load input inside ContactUs component', () => {
        render(<Contactus />);
        const textBoxes = screen.getAllByRole('textbox');
        expect(textBoxes.length).toBe(3);
    });
});
