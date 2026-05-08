# 01-nodejs-cypress-clone

## Iniciar el servidor

Es necesario configurar el script en el `package.json` que nos permita esto:

```json
    {
  "scripts": {
    "start": "node src/index.js",
    "serve": "nodemon src/index.js"
  }
}
```

> Podemos configurar un script con `nodemon` también para mantenerlo vivo y que escuche los cambios.

## Rutas en NodeJS

### Alias

Se pueden definir alias de rutas mediante la propiedad "imports" en el `package.json`:

```json
{
  "name": "01-nodejs-cypress-clon",
  "imports": {
    "#constants": "./src/core/constants.js"
  },
  ...
}
```

Y se utiliza de la siguiente manera:

`` 
const constants = require("#constants");
``