 

// next.config.mjs
// const nextConfig = {
//     images: {
//         domains: ['res.cloudinary.com'],
//     },
// };

// export default nextConfig;


const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    webpack(config, { dev }) {
      if (!dev) {
        config.devtool = 'hidden-source-map';
      }
      return config;
    },
  };
  
  export default nextConfig;
  