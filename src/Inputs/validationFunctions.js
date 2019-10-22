
function validationUpToThousand (event, newValue, previousValue) {
    
    console.log(event, newValue, previousValue);
    
    if (newValue === ''){return;}
    else if (! (/^(([0-9]{1,3})?)$/.test(newValue)) ){
        event.preventDefault();
    }
}

function validationUpToHundred (event, newValue, previousValue) {
    
    if (newValue === ''){return;}
    else if (! (/^(([0-9]{1,2})?)$/.test(newValue)) ){
        event.preventDefault();
    }
}

export {validationUpToThousand, validationUpToHundred};