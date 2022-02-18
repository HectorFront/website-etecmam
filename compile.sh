#!/bin/bash
compiler() {
  echo "Building...";
  # status gulp
  echo "[~Starting Gulp] ================================";
  gulp default
  
  # transpiler js-ecs6 to ecs5
  echo "[~Transpilando JavaScript] ================================";
  gulp babel
 
# minify javascript
  echo "[~Minificando JavaScript] ================================";
  gulp minify-js-controller
  gulp minify-js-query
  gulp minify-js-tools

# run server
  echo "[~Stoping PM2 Server in - $hostname] ================================";
  echo "[~Running PM2 Server in - $hostname] ================================";
  pm2 stop server.js
  pm2 start server.js
}

menu() {
  echo "[~Etec MAM] ================================"
  echo "[~Etec MAM] => 1 - Exit"
  echo "[~Etec MAM] => 2 - Run compilation - [~Etec MAM]"
  echo "[~Etec MAM] ================================"
  read option
  case $option in
    1)
        exit
    ;;
      2)
        clear
        compiler
    ;;
esac
}
sudo clear
menu
