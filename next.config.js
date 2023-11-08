module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_OAK_ASSETS_HOST,
        port: "",
        pathname: `${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/**`,
      },
    ],
  },
};
