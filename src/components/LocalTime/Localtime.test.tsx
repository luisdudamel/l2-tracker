import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import LocalTime from "./LocalTime";

beforeAll(() => {
    const mockTime = new Date("2017-02-02T14:53:59.218");
    vi.useFakeTimers().setSystemTime(mockTime);
});

describe("Given a LocalTime component", () => {
    describe("When it its called", () => {
        test("Then it should render the paragraph `Your local time:`", () => {
            const expectedText = "Your local time:";
            render(<LocalTime localTime="14:53" />);

            const localTimeText = screen.getByText(expectedText);

            expect(localTimeText).toBeInTheDocument();
        });
    });

    describe("When its called and the time is 14:53", () => {
        test("Then it should show the text `14:53`", () => {
            const expectedTimeText = "14:53";

            render(<LocalTime localTime="14:53" />);
            const localTimeText = screen.getByText(expectedTimeText);

            expect(localTimeText).toBeInTheDocument();
        });
    });
});
