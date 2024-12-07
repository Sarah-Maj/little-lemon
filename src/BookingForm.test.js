import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
    test("Renders the form elements correctly", () => {
        render(<BookingForm />);
        
        // Check form elements are rendered
        expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /make your reservation/i })).toBeInTheDocument();
    });

    test("Date input has required HTML5 attributes", () => {
        render(<BookingForm />);
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toHaveAttribute("type", "date");
        expect(dateInput).toHaveAttribute("required");
    });

    test("Guests input has minimum value", () => {
        render(<BookingForm />);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        expect(guestsInput).toHaveAttribute("type", "number");
        expect(guestsInput).toHaveAttribute("min", "1");
        expect(guestsInput).toHaveAttribute("required");
    });

    test("Select elements have required attributes", () => {
        render(<BookingForm />);
        
        const timeSelect = screen.getByLabelText(/choose time/i);
        expect(timeSelect).toHaveAttribute("required");
        
        const occasionSelect = screen.getByLabelText(/occasion/i);
        expect(occasionSelect).toHaveAttribute("required");
    });

    test("Form submission works for valid input", () => {
        const mockSubmit = jest.fn();
        render(<BookingForm SubmitForm={mockSubmit} />);

        fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2024-12-10" } });
        fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "18:00" } });
        fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "4" } });
        fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Anniversary" } });
        
        fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

        expect(mockSubmit).toHaveBeenCalledTimes(1);
        expect(mockSubmit).toHaveBeenCalledWith({
            date: "2024-12-10",
            selectedTime: "18:00",
            guests: "4",
            occasion: "Anniversary"
        });
    });

    test("Form does not submit for invalid input", () => {
        const mockSubmit = jest.fn();
        render(<BookingForm SubmitForm={mockSubmit} />);
        
        // Leave all fields empty and try to submit
        fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

        expect(mockSubmit).not.toHaveBeenCalled();

        // Check for validation errors 
        expect(screen.queryByText(/please select a time/i)).toBeInTheDocument();
        expect(screen.queryByText(/please select an occasion/i)).toBeInTheDocument();
    });
});