© Copyright 2021 Etec Monsenhor Antônio Magliano

# Website Etec MAM 2020

Instalação:

Versão requerida do Node.js:
```
v13.12.0
```

MYSQL
```
Execute o Banco que está no diretório (backend/SQL/etecmam.sql)
```

Instalar dependências:
```
npm i
```
Iniciar projeto com nodemon:
```
npm start
```

Iniciar projeto sem nodemon:
```
node server
```

Instalação pm2 para servidor 24h:
```
npm install pm2 -g
```

Iniciar pm2 e cancelar:
```
pm2 start server.js
pm2 stop server.js
```

executar projeto no navegador
```
localhost:9192
```
