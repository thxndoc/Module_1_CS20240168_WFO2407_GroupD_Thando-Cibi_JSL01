function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    const valid = "Valid Syntax";
    const invalid = "Invalid Syntax" + String.fromCodePoint(0x23FA);
    
    if (input === "") {
        alert("The field cannot be empty");
        return false;
    } else if (input.startsWith("pet_")){
        result = valid;
    } else {
        result = invalid;
    }
    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
            
            document.getElementById('result').innerText = result;
}


