module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_OAK_ASSETS_HOST,
        port: "",
        pathname: `${process.env.NEXT_PUBLIC_OAK_ASSETS_PATH}/**`,
      },
      {
        protocol: "https",
        hostname: "oaknationalacademy-res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
