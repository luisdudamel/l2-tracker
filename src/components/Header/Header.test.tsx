import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import Header from "./Header";

describe("Given a Header component", () => {
    describe("When its called", () => {
        test("Then it should render a heading with the text `TIME TRACKER`", () => {
            const expectedHeadingText = "TIME TRACKER";

            render(<Header />);

            const headingText = screen.getByRole("heading", {
                name: expectedHeadingText,
            });

            expect(headingText).toBeInTheDocument();
        });
    });
});
