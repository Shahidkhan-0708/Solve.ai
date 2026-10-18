import type { NextConfig } from "next";
const config: NextConfig = { reactStrictMode: true, turbopack: { root: process.cwd() }, async headers() { return [{ source: "/sw.js", headers: [{ key: "Cache-Control", value: "no-cache, no-store, must-revalidate" }, { key: "Content-Type", value: "application/javascript; charset=utf-8" }] }, { source: "/(.*)", headers: [{ key: "X-Content-Type-Options", value: "nosniff" }, { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }] }]; } };
export default config;
