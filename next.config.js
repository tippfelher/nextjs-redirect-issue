/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  headers: async () => [{
    source: '/:path*',
    headers: [{
      key: 'Access-Control-Allow-Origin',
      value: '*',
    }, {
      key: 'Referrer-Policy',
      value: 'strict-origin-when-cross-origin',
    }],
  }],
};

export default config;
