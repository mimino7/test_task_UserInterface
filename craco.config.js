const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "providers": path.resolve(__dirname, "src/providers"),
    },
  },
};
