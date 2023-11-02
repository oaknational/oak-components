import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const TestImage = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "oak-web-application",
    },
  });

  const myImage = cld.image("t_media_lib_thumb/cld-sample.jpg");
  return <AdvancedImage cldImg={myImage} />;
};

export default TestImage;
