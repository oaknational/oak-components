const host = process.env.NEXT_PUBLIC_OAK_ASSETS_HOST;
const path = process.env.NEXT_PUBLIC_OAK_ASSETS_PATH;
const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

if (!host || !path || !cloudinaryCloudName) {
  throw new Error(
    "NEXT_PUBLIC_OAK_ASSETS_HOST, NEXT_PUBLIC_OAK_ASSETS_PATH, and NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME are required",
  );
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: host,
        port: "",
        pathname: `${path}/**`,
      },
      {
        protocol: "https",
        hostname: `${cloudinaryCloudName}-res.cloudinary.com`,
        port: "",
        pathname: "/**",
      },
    ],
  },
};
