module.exports = {
  apps : [{
    name: "ssr-yam",
    script: "/home/www/ssr.yam.com/webroot/bin/www",
    exec_mode: "cluster",
    instance: 1,
    max_memory_restart: "150M",
    out_file: "/home/www/ssr.yam.com/logs/access.log",
    error_file: "/home/www/ssr.yam.com/logs/error.log",
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    restart_delay: 5000,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
