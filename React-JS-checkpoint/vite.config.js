const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 4400,
    hot: true,
  },
};
