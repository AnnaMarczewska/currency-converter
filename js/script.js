let formElement = document.querySelector (".js-form");
let currencyElement = document.querySelector (".js-currency");
let amountElement = document.querySelector (".js-amount");
let resultElement = document.querySelector (".js-result");


let EURrate = 4.74;
let CHFrate = 4.81;
let GBPrate = 5.34;
let USDrate = 4.44;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = amount / EURrate;
            break;
        case "CHF":
            result = amount / CHFrate;
            break;
        case "GBP":
            result = amount / GBPrate;
            break;
        case "USD":
            result = amount / USDrate;
            break;
                
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});
