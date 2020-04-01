JsBarcode(".barcode").init();
const img = document.querySelector('.barcode');

const getRandomInt = (min = 1000, max = 9999) => {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;

};


const setValue = () => {

    img.setAttribute('jsbarcode-value', '482011528' + getRandomInt());
    JsBarcode(".barcode").init();

};
