import { render, screen } from "@testing-library/react";
import CreatedAt from "../components/CreatedAt";

describe("Created at formatted text", () => {
  test("If the formatted text is shown correctly when the date string is given", () => {
    const justNowDateStr = new Date().toISOString();
    render(<CreatedAt prefixText="created" dateStr={justNowDateStr} />);
    expect(screen.getByText("created just now")).toBeInTheDocument();

    const hourDateStr = new Date(Date.now() - 3600 * 1000 * 2).toISOString();
    render(<CreatedAt prefixText="created" dateStr={hourDateStr} />);
    expect(screen.getByText("created 2 hours ago")).toBeInTheDocument();

    const minutesDateStr = new Date(Date.now() - 1000 * 60 * 3).toISOString();
    render(<CreatedAt prefixText="created" dateStr={minutesDateStr} />);
    expect(screen.getByText("created 3 minutes ago")).toBeInTheDocument();

    const yearsDateStr = new Date("05/15/2020").toISOString();
    render(<CreatedAt prefixText="created" dateStr={yearsDateStr} />);
    expect(screen.getByText("created May 15 2020")).toBeInTheDocument();

    const sameYearDateStr = new Date(`01/01/${new Date().getFullYear()}`).toISOString();
    render(<CreatedAt prefixText="created" dateStr={sameYearDateStr} />);
    expect(screen.getByText("created Jan 01")).toBeInTheDocument();
  });
});
