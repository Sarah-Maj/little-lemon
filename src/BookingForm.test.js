import {render,screen,act} from "@testing-library/react";
import BookingForm from "./BookingForm";


test("Renders the BookingForm heading", () => {
    render(
        <BookingForm
        resDate=""
        setResDate={() => {}}
        resTime=""
        setResTime={() => {}}
        guests={1}
        setGuests={() => {}}
        occasion="Birthday"
        setOccasion={() => {}}
        availableTimes={["17:00", "18:00", "19:00", "20:00"]}
        onSubmit={() => {}}
        />
    );

    const dateInput = screen.getByLabelText(/reservation date/i); // Adjust the label text to match the component
    const timeInput = screen.getByLabelText(/time/i); // Adjust the label text for time input
    const guestsInput = screen.getByLabelText(/guests/i); // Adjust the label for guest input
    const occasionInput = screen.getByLabelText(/occasion/i); // Adjust for occasion input

    // Simulate filling out the form
    fireEvent.change(dateInput, { target: { value: "2024-12-10" } });
    fireEvent.change(timeInput, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } });

    // Find and click the submit button
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    // Expect the mockSubmit function to have been called
    expect(mockSubmit).toHaveBeenCalledTimes(1);

    // You can also test that the mockSubmit was called with the correct arguments
    expect(mockSubmit).toHaveBeenCalledWith({
      resDate: "2024-12-10",
      resTime: "18:00",
      guests: 4,
      occasion: "Anniversary"
    });
  });

    test("Renders the date input label", () => {
        render(<BookingForm />);
        const label = screen.getByText(/Select Date/i);
        expect(label).toBeInTheDocument();
    });

    const heading = screen.getByRole("heading", {name:/Booking Form/i});
    expect(heading).toBeInTheDocument();
