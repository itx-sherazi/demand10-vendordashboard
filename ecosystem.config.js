module.exports = {
  apps: [
    {
      name: "demand10-vendor",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3006
      }
    }
  ]
};
