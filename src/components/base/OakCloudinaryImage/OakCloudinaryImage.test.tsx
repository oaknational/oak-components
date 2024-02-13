import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";

import {
  OakCloudinaryConfigProvider,
  OakCloudinaryImage,
} from "./OakCloudinaryImage";

describe(OakCloudinaryImage, () => {
  it("matches snapshot", () => {
    const tree = create(
      <OakCloudinaryImage
        cloudinaryId="v1688316547/xqvnpdqx9u2awiykyb8s.jpg"
        alt="a test image"
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("respects the globally set config", () => {
    const { getByRole } = render(
      <OakCloudinaryImage
        cloudinaryId="v1608635688/image.jpg"
        alt="a test image"
      />,
    );

    expect(getByRole("img").getAttribute("src")).toMatch(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/c_limit,w_3840/fl_keep_attribution/f_auto/q_auto/v1608635688/image",
    );
  });

  it("accepts a cloudinary image id", () => {
    const { getByRole } = render(
      <OakCloudinaryImage
        cloudinaryId="v1608635688/image.jpg"
        alt="a test image"
      />,
    );

    expect(getByRole("img").getAttribute("src")).toMatch(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/c_limit,w_3840/fl_keep_attribution/f_auto/q_auto/v1608635688/image",
    );
  });

  it("accepts a full cloudinary url", () => {
    const { getByRole } = render(
      <OakCloudinaryImage
        cloudinaryId="https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/v1608635688/image.jpg"
        alt="a test image"
      />,
    );

    expect(getByRole("img").getAttribute("src")).toMatch(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/c_limit,w_3840/fl_keep_attribution/f_auto/q_auto/v1608635688/image",
    );
  });

  it("does not attempt to optimize the image when it is an SVG", () => {
    const { getByRole } = render(
      <OakCloudinaryImage
        cloudinaryId="https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/v1608635688/image.svg"
        alt="a test image"
      />,
    );

    expect(getByRole("img").getAttribute("src")).toMatch(
      "https://res.cloudinary.com/mock-cloudinary-cloud/image/upload/v1608635688/image",
    );
  });

  describe("private CDNs", () => {
    it("are respected when an id is passed", () => {
      const { getByRole } = render(
        <OakCloudinaryConfigProvider
          value={{
            cloud: {
              cloudName: "private-cloudinary-cloud",
            },
            url: {
              privateCdn: true,
            },
          }}
        >
          <OakCloudinaryImage
            cloudinaryId="https://private-cloudinary-cloud-res.cloudinary.com/image/upload/v1608635688/image.jpg"
            alt="a test image"
          />
        </OakCloudinaryConfigProvider>,
      );

      expect(getByRole("img").getAttribute("src")).toMatch(
        "https://private-cloudinary-cloud-res.cloudinary.com/image/upload/c_limit,w_3840/fl_keep_attribution/f_auto/q_auto/v1608635688/image.jpg",
      );
    });

    it("are respected when an full URL is passed", () => {
      const { getByRole } = render(
        <OakCloudinaryConfigProvider
          value={{
            cloud: {
              cloudName: "private-cloudinary-cloud",
            },
            url: {
              privateCdn: true,
            },
          }}
        >
          <OakCloudinaryImage
            cloudinaryId="https://private-cloudinary-cloud-res.cloudinary.com/image/upload/v1608635688/image.jpg"
            alt="a test image"
          />
        </OakCloudinaryConfigProvider>,
      );

      expect(getByRole("img").getAttribute("src")).toMatch(
        "https://private-cloudinary-cloud-res.cloudinary.com/image/upload/c_limit,w_3840/fl_keep_attribution/f_auto/q_auto/v1608635688/image.jpg",
      );
    });
  });
});
