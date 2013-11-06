MorseCode
=========

A simple translator and interpreter of Morse code.

The translation and interpretation convert texts to signals of Morse code,
    instead of the code itself.
    Thus it can be used to do further convertion toward analog signals if you like.

## From Text to Morse Code

<pre>
MT = require('./MorseTranslator');
table = require('./MorseTable.json');
console.log(MT(table, 'hello world'));
</pre>

## From Morse Code to Text

<pre>
MI = require('./MorseInterpreter');
table = require('./MorseTableInverse.json');
console.log(MI(table, '=*=*=*=***=***=*===*=*=***=*===*=*=***===*===*===******=*===*===***===*===*===***=*===*=***=*===*=*=***===*=*='));
</pre>

