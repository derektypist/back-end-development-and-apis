const { __esModule } = require("@babel/generator");

function isPrime(n) {
    if (n < 2) {
        return false;
    } else if (n === 2) {
        return true;
    } else if (n > 2 && n % 2 === 0) {
        return false;
    } else {
        for (let i=3; i<=Math.sqrt(n); i+=2) {
            if (n% i === 0) return false;
        }
    }
    return true;
}

module.exports = {
    isPrime
};