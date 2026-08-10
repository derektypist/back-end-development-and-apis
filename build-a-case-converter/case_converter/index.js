function getUpperCase(str) {
    return str.toUpperCase();
}

function getLowerCase(str) {
    return str.toLowerCase();
}

function getSentenceCase(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function getProperCase(str) {
    let words = str.split(" ");
    return words.map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(" ");
}