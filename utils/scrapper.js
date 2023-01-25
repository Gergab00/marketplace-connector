const puppeteer = require('puppeteer');

async function scrapeData(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const data = await page.evaluate(() => {
        // aquí va el código para seleccionar y extraer los datos de la página web.
        // puedes usar selectores de CSS para seleccionar elementos específicos
        // y el método .textContent para obtener el contenido de texto de un elemento
        let title = document.querySelector('h1').textContent;
        let price = document.querySelector('.price').textContent;
        return {title, price};
    });

    await browser.close();
    return data;
}

module.exports = {
    scrapeData
}
