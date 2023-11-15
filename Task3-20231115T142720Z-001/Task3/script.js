const calculateTemp = () => {

    // Get the value entered in the temperature input field
    const numberTemp = parseFloat(document.getElementById('temp').value); // Parse input as a floating-point number

    // Get the selected temperature unit for the input
    const inputUnit = document.getElementById('temp_diff').value;

    // Get the selected temperature unit for conversion
    const outputUnit = document.getElementById('output_diff').value;

    let result;

    // Perform the conversion based on the selected units
    if (inputUnit === "cel" && outputUnit === "fah") {
        // Convert Celsius to Fahrenheit
        result = numberTemp * (9 / 5) + 32;
    } else if (inputUnit === "cel" && outputUnit === "kel") {
        // Convert Celsius to Kelvin
        result = numberTemp + 273;
    } else if (inputUnit === "fah" && outputUnit === "cel") {
        // Convert Fahrenheit to Celsius
        result = (numberTemp - 32) * 5 / 9;
    } else if (inputUnit === "fah" && outputUnit === "kel") {
        // Convert Fahrenheit to Kelvin
        result = (numberTemp - 32) * 5 / 9 + 273;
    } else if (inputUnit === "kel" && outputUnit === "cel") {
        // Convert Kelvin to Celsius
        result = numberTemp - 273;
    } else if (inputUnit === "kel" && outputUnit === "fah") {
        // Convert Kelvin to Fahrenheit
        result = numberTemp * 9 / 5 - 459.67;
    } else {
        // invalid units 
        result = numberTemp;
    }

    //  result
    document.getElementById('resultContainer').innerHTML = `= ${result.toFixed(2)}${getUnitSymbol(outputUnit)}`;
}

// Helper function to get the symbol for the selected unit
const getUnitSymbol = (unit) => {
    switch (unit) {
        case 'cel':
            return '°Celsius';
        case 'fah':
            return '°Fahrenheit';
        case 'kel':
            return 'Kelvin';
        default:
            return '';
    }
}
