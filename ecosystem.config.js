module.exports = {
  apps : [{
    name: "ssr-yam",
    script: "/home/www/ssr.yam.com/webroot/bin/www",
    cwd: "/home/www/ssr.yam.com/webroot/",
    exec_mode: "cluster",
    instance: 1,
    max_memory_restart: "300M",
    out_file: "/home/www/ssr.yam.com/logs/access.log",
    error_file: "/home/www/ssr.yam.com/logs/error.log",
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
