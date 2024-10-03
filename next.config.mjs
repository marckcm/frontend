import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // insere está configuração para que o sistema next encontre as imagens
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            },
        ],
    },
};

export default nextConfig;
