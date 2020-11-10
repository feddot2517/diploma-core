# mongo-express-typescript server template

## Features

* typescript
* express
* prettier
* cors
* mongoose
* ts-node
* basic express routes 

## How to use
1. download this repository as a zip archive
2. unpack
3. ```npm install```
4. run mongodb server
5. give name to mongo database in src/main.ts(const DB)
6. ```npm run dev```
7. code

To run prettier use WebStorm shift+shift or shell ```prettier --write ./src```

## MongoDB server install

### LINUX 
   
server, client and additional tools installation
```bash
sudo apt install mongodb-server-core 
sudo apt install mongodb-clients
sudo apt install mongo-tools
sudo mkdir -p /data/db
   ```

To run MongoDB server use 
```bash 
sudo mongod 
```