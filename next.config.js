/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    redirects() {
        return [
            {
                source: "/",
                destination: "/room/default",
                permanent: true
            },
            {
                source: "/room",
                destination: "/room/default",
                permanent: true
            }
        ];
    }
}

module.exports = nextConfig;