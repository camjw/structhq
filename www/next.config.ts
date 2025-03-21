import nextMDX from "@next/mdx";

const withMDX = nextMDX({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  outputFileTracingIncludes: {
    "/**/*": ["./src/app/**/*.mdx"],
  },
};

export default withMDX(nextConfig);
