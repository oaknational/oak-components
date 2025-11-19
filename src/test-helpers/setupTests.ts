import "jest-styled-components";

process.env.NEXT_PUBLIC_OAK_ASSETS_HOST = "res.cloudinary.com";
process.env.NEXT_PUBLIC_OAK_ASSETS_PATH = "mock-cloudinary-cloud/image/upload";
process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = "mock-cloudinary-cloud";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useId: () => "react-use-id-test-result",
}));

// Override this with `TEST_ALLOW_LOGGING=1` if you want logs locally
if (process.env.TEST_ALLOW_LOGGING !== "1") {
  const consoleMethods = ["log", "info", "error", "warn", "debug"] as const;
  type ConsoleMethod = (typeof consoleMethods)[number];

  consoleMethods.forEach((type: ConsoleMethod) => {
    console[type] = (message: string) => {
      throw new Error(
        `Failed: We don't allow console.${type} while running tests!\n\n${message}\n\nIf you'd like to enable logging for testing, prefix with TEST_ALLOW_LOGGING=1`,
      );
    };
  });
}
