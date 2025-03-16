function convert() {
    let unitType = document.getElementById("unitType").value;
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let result = document.getElementById("result");

    if(isNaN(InputValue)){
        result.textContent = "0";
        return;
}

if (unitType === "meter-kilometer"){
    result.textContent = (inputValue / 1000).toFixed(4) + "km";
} else if (unitType === "inch-centimeter") {
    result.textContent = (inputValue * 2.54).toFixed(2) + " cm";
    }
}

// Update input placeholder based on slection
function updatePlaceholder(){
    let unitType = document.getElementById("unitType").value;
    let inputField = document.getElementById("inputValue");

    if (unitType === "meter-kilometer"){
        inputFieled.placeholder = "Enter meters";
    } else {
        inputField.placeholder + "Enter inches";
    }
}