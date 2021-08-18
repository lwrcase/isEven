'use strict';
module.exports = function isEven(num) {
    var _t = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
        'eleven': 11,
        'twelve': 12,
        'thirteen': 13,
        'fourteen': 14,
        'fifteen': 15,
        'sixteen': 16,
        'seventeen': 17,
        'eighteen': 18,
        'nineteen': 19,
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90
    };
    var _m = {
        'thousand':     1000,
        'million':      1000000,
        'billion':      1000000000,
        'trillion':     1000000000000,
        'quadrillion':  1000000000000000,
        'quintillion':  1000000000000000000,
        'sextillion':   1000000000000000000000,
        'septillion':   1000000000000000000000000,
        'octillion':    1000000000000000000000000000,
        'nonillion':    1000000000000000000000000000000,
        'decillion':    1000000000000000000000000000000000,
    };
    if (!num) {
        return false;
    }
    if (typeof num === 'number') {
        return num%2 === 0;
    }
    if (typeof num === 'string') {
        if (!isNaN(parseInt(num))) {
            return parseInt(num)%2 === 0;
        }
        var a, b, c;
        return fromString(num)%2 === 0;
        function fromString(s) {
            a = s.toString().split(/[\s-]+/);
            b = 0;
            c = 0;
            a.forEach(aStr);
            return b + c;
        }
        function aStr(w) {
            var x = _t[w.toString().toLowerCase()];
            if (x != null) {
                c = c + x;
            }
            else if (w.toString().toLowerCase() == "hundred") {
                c = c * 100;
            }
            else {
                x = _m[w.toString().toLowerCase()];
                if (x != null) {
                    b = b + c * x
                    c = 0;
                }
            }
        }
    }
}