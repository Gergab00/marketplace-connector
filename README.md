# marketplace-connector
This project is a web application created with Node.js and Express.js that connects to the Amazon, Mercadolibre, Claroshop and Woocommerce APIs, using puppeteer and inquirer. It allows users to search and compare products in different online stores.


## Estructura A
- myApp/
  - bin/
    - www (archivo de arranque de la aplicación)
  - config/
    - db.js (archivo de configuración de la base de datos)
    - env.js (archivo de configuración del entorno)
  - controllers/
    - amazonAPI.js (controlador para la conexión a la API de Amazon)
    - mercadolibreAPI.js (controlador para la conexión a la API de Mercadolibre)
    - claroshopAPI.js (controlador para la conexión a la API de Claroshop)
    - woocommerceAPI.js (controlador para la conexión a la API de Woocommerce)
    - scrapper.js (controlador para la extracción de datos con puppeteer)
  - models/
    - product.js (modelo para los productos)
    - user.js (modelo para los usuarios)
  - routes/
    - api.js (archivo de rutas de la API)
    - index.js (archivo de rutas de la aplicación)
  - services/
    - amazon.js (servicios para la conexión a la API de Amazon)
    - mercadolibre.js (servicios para la conexión a la API de Mercadolibre)
    - claroshop.js (servicios para la conexión a la API de Claroshop)
    - woocommerce.js (servicios para la conexión a la API de Woocommerce)
  - views/
    - error.pug (vista para mostrar errores)
    - index.pug (vista principal de la aplicación)
    - products.pug (vista para mostrar los productos)
  - app.js (archivo principal de la aplicación)
  - package.json (archivo de configuración del paquete)


## Estructura B
|-- my-app
    |-- src
        |-- api
            |-- amazon.js
            |-- woocommerce.js
            |-- mercadolibre.js
        |-- scrapper
            |-- puppeteer.js
        |-- cli
            |-- commands.js
            |-- prompt.js
        |-- index.js
    |-- test
        |-- api
            |-- amazon.test.js
            |-- woocommerce.test.js
            |-- mercadolibre.test.js
        |-- scrapper
            |-- puppeteer.test.js
        |-- cli
            |-- commands.test.js
            |-- prompt.test.js
    |-- .gitignore
    |-- package.json
    |-- README.md

