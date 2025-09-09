import path from 'path';

// Explicitly set the tracing root to this project directory to silence the
// warning about multiple lockfiles (a parent folder also has a package-lock.json).
const nextConfig = /** @type {import('next').NextConfig} */ ({
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    // Added explicit pathname globs; production may drop images if pathname is omitted
    remotePatterns: [
      { protocol: 'https', hostname: 'framerusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'randomuser.me', pathname: '/**' }
    ]
  }
});

export default nextConfig;
