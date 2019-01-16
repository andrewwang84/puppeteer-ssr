module.exports = {
  apps : [{
    name: "ssr-yam",
    script: "./bin/www",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
