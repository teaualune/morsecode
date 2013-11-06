var MorseTranslator = function (morseTable, source) {
        var output = [],
            c = null,
            buffer = null,
            b;

        if ('string' === typeof source) {
            source = source.split('');
        }
        while (c = source.shift()) {
            if (c === ' ') {
                output.push('***');
            } else {
                if (output.length > 0) {
                    output.push('***');
                }
                c = c.toUpperCase();
                buffer = morseTable[c];
                buffer = buffer.split('').join('*').split('');
                for (b = 0; b < buffer.length; b = b + 1) {
                    buffer[b] = buffer[b].replace('-', '===').replace('.', '=');
                }
                output.push(buffer.join(''));
            }
        }
        return output.join('');
    };
