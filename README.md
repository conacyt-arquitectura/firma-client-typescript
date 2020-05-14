# Cliente del servicio de Firma en TypeScript

El cliente para TypeScript del microservicio de Firma de CONACYT.

# Instalación

`npm i @conacyt/firma-client`

# Uso

Para usar en un archivo TypeScript:

```ts
import { FirmaApi } from "@conacyt/firma-client";

const firmaApi = new FirmaApi({}, 'http://localhost:8081');
firmaApi
  .validate("CERTIFICADO EN FORMATO PEM")
  .then(res => console.log(res.data));
  .catch(console.error);
```

Para usar en un archivo JavaScript:

```js
const FirmaApi = require("firma-client").FirmaApi;

const firmaApi = new FirmaApi({}, 'http://localhost:8081');

firmaApi
  .validate("CERTIFICADO EN FORMATO PEM")
  .then(res => console.log(res.data));
  .catch(console.error);
```
