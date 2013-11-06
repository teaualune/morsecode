module.exports = function (f) {
    var mt = require('./MorseTranslator'),
        mi = require('./MorseInterpreter'),
        tm = require('./MorseTable.json'),
        ti = require('./MorseTableInverse.json');
        from = f || 'hello world',
        to = null,
        check = null;

    to = mt(tm, from);
    check = mi(ti, to);
    console.log(to);
    console.log(check);
    return from.toUpperCase() === check;
}