#!/usr/bin/env node
import app from '../src/app';
import config from '../src/config/environments/config';
import '../src/config/database/connection'

function normalizePort(val:string):number {
  const port:number = parseInt(val, 10);
  if(isNaN(port)) console.log("manejador de errores") 
  return port; 
}

const port:number = normalizePort(config.SERVER.PORT);

app.listen(port, () => {
  console.log(`server listening in the port: ${port}`);
});