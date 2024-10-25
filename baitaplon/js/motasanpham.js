const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const quantityInput = document.getElementById("soluong");

minusButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

plusButton.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});