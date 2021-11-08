function trimString(){
    const string = "  HelLo  "
    return string.trim();
}

function changeToLowerCase(){
    const string = "  HelLo  "
     return string.toLowerCase();
}
 
function changeToUpperCase(){
    const string = "  HelLo  "
    return string.toUpperCase();
}

module.exports.trimStr = trimString;
module.exports.lowerCase = changeToLowerCase;
module.exports.upperCase = changeToUpperCase;