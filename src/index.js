// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var obj = {};

    if (currency > 10000) {
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    }

    if (currency <= 0) {
        return obj;
    }

    if (currency >= 50) {
        var h = parseInt(currency/50);
        obj.H = h;
        currency = currency - ( h * 50 );
    }

    if (currency >= 25) {
        var q = parseInt(currency/25);
        obj.Q = q;
        currency = currency - ( q * 25 );
    }

    if (currency >= 10) {
        var d = parseInt(currency/10);
        obj.D = d;
        currency = currency - ( d * 10 );
    }

    if (currency >= 5) {
        var n = parseInt(currency/5);
        obj.N = n;
        currency = currency - ( n * 5 );
    }

    if (currency < 5 && currency > 0) {
        var p = currency;
        obj.P = p;
    }

    return obj;
}
