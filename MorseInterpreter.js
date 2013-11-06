(function () {
    var MI = function (morseTable, source) {

            var toCode = function (b) {
                    var code;
                    if (b.length === 1) {
                        code = '.';
                    } else if (b.length === 3) {
                        code = '-';
                    }
                    return code;
                },

                toLetter = function (c) {
                    return morseTable[c.join('')];
                },

                toWord = function (w) {
                    return w.join('');
                },

                buffer = [],
                letter = [],
                word = [],
                output = [],
                sc = 0,

                divider = function (_sc) {
                    if (_sc === 1) { // construct a code
                        letter.push(toCode(buffer));
                        buffer = [];
                    } else if (_sc === 3) { // construct a letter
                        word.push(toLetter(letter));
                        letter = [];
                    } else if (_sc === 6) { // construct a word
                        if (output.length > 0) {
                            output.push(' ');
                        }
                        output.push(toWord(word));
                        word = [];
                    }
                },

                c = null;

            if ('string' === typeof source) {
                source = source.split('');
            }

            while (c = source.shift()) {
                if (c === '*') { // space
                    sc = sc + 1;
                } else if (c === '=') { // signal
                    buffer.push(c);
                    sc = 0;
                }
                divider(sc);
            }

            // finalization
            divider(1);
            divider(3);
            divider(6);
            return output.join('');
        };

    if (module && module.exports) {
        module.exports = MI;
    } else if (window) {
        window.MorseInterpreter = MI;
    } else {
        MorseInterpreter = MI;
    }

}());
