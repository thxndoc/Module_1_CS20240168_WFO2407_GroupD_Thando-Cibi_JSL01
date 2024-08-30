function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    const valid = "Valid Syntax";
    const invalid = "Invalid Syntax";
    const validIndicator = "\u{1F7E2}";
    const invalidIndicator = "\u{1F534}";
    
    if (input === "") {
        alert("The field cannot be empty");
        return;
    } else if (input.startsWith("pet_")){
        result = `${valid} ${validIndicator}`;
    } else {
        result = `${invalid} ${invalidIndicator}`;
    }
    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
            
            document.getElementById('result').innerText = result;
}


