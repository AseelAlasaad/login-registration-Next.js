import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const config=require("./config")

// import config from './config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {

    env:{

        DB_URL:config.DB_URL,
        API:config.API
    }
};

export default nextConfig;
