{

    const calculateResult = (currency, amount) => {
        const EURrate = 4.74;
        const CHFrate = 4.81;
        const GBPrate = 5.34;
        const USDrate = 4.44;
        switch (currency) {
            case "EUR":
                return amount / EURrate;

            case "CHF":
                return amount / CHFrate;

            case "GBP":
                return amount / GBPrate;

            case "USD":
                return amount / USDrate;

        }
    };

    const upDateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = amountElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(currency, amount);

        upDateResultText(amount, result, currency);
    };

        
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

    };

    init();

}