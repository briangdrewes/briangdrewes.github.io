/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath: isProd ? '/briangdrewes.github.io' : '',
    assetPrefix: isProd ? '/briangdrewes.github.io/' : '',
    images: {
        domains: ['open.cruip.com','ucarecdn.com', 'www.svgrepo.com','images.unsplash.com', 'res.cloudinary.com']
    },
    webpack(config) {
        config
            .module
            .rules
            .push({test: /\.svg$/, use: ["@svgr/webpack"]});

        return config;
    }
}

module.exports = nextConfig
