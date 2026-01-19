import { getTimeText } from "./utils";

// May need to increase this depending on the test run time
const timeToSubtract = 10;

describe("getTimeText", () => {
  it("returns 'just now' if time is less than a second in the past", () => {
    expect(getTimeText(new Date().toUTCString())).toBe("just now");
  });
  it("returns time in secs if time is less than a minute in the past", () => {
    expect(getTimeText(Date.now() - (1000 * 60 - timeToSubtract))).toBe(
      "59 secs ago",
    );
  });
  it("returns time in mins if time is less than an hour in the past", () => {
    expect(getTimeText(Date.now() - (1000 * 60 * 60 - timeToSubtract))).toBe(
      "59 mins ago",
    );
  });
  it("returns time in hours if time is less than a day in the past", () => {
    expect(
      getTimeText(Date.now() - (1000 * 60 * 60 * 24 - timeToSubtract)),
    ).toBe("23 hrs ago");
  });
  it("returns time in days if time is less than a week in the past", () => {
    expect(
      getTimeText(Date.now() - (1000 * 60 * 60 * 24 * 7 - timeToSubtract)),
    ).toBe("6 days ago");
  });
  it("returns time in weeks if time is less than a month in the past", () => {
    expect(
      getTimeText(Date.now() - (1000 * 60 * 60 * 24 * 30 - timeToSubtract)),
    ).toBe("4 weeks ago");
  });
  it("returns time in months if time is less than a year in the past", () => {
    expect(
      getTimeText(Date.now() - (1000 * 60 * 60 * 24 * 364 - timeToSubtract)),
    ).toBe("12 months ago");
  });
  it("returns time in years if time is more than a year in the past", () => {
    expect(getTimeText(Date.now() - 1000 * 60 * 60 * 24 * 365 * 2)).toBe(
      "2 years ago",
    );
  });
  it("returns 'at an unknown time' if the date is invalid", () => {
    expect(getTimeText("invalid date")).toBe("at an unknown time");
  });
});
