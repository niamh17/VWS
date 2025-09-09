import path from 'path';

// Explicitly set the tracing root to this project directory to silence the
// warning about multiple lockfiles (a parent folder also has a package-lock.json).
const nextConfig = /** @type {import('next').NextConfig} */ ({
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'randomuser.me' }
    ]
  }
});

export default nextConfig;
