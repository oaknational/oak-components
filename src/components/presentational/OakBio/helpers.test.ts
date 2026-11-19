import { generateBioTitle } from "./helpers";

describe("generateBioTitle", () => {
  it("should generate title correctly", () => {
    expect(generateBioTitle({ role: "Teacher", organisationName: "Oak" })).toBe(
      "Teacher at Oak",
    );
    expect(generateBioTitle({ role: "student" })).toBe("student");
    expect(generateBioTitle({ organisationName: "Oak" })).toBe("Oak");
    expect(generateBioTitle({})).toBe("");
  });
});
