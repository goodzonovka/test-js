function filterBrackets(str) {
    let strLength = str.length,
        status;

    if (strLength % 2 !== 0) return false;

    // проверка на ([{}])
    for (let i = 0, j = 1; i < strLength/2; i++, j++) {
        let necessarySymbol;
        if (str[i] == '(') necessarySymbol = ')';
        if (str[i] == '{') necessarySymbol = '}';
        if (str[i] == '[') necessarySymbol = ']';

        if (necessarySymbol === str[strLength-j]) {
            status = true;
        } else {
            status = false;
            break;
        }
    }

    // если не прошло проверку на ([{}]), то проверяем на (){}[]
    if (!status) {
        for (let i = 0; i < strLength/2; i=i+2) {
            let necessarySymbol;
            if (str[i] == '(') necessarySymbol = ')';
            if (str[i] == '{') necessarySymbol = '}';
            if (str[i] == '[') necessarySymbol = ']';

            if (necessarySymbol === str[i+1]) {
                status = true;
            } else {
                status = false;
                break;
            }
        }
    }

    return status;
}

/*console.log(filterBrackets('({[]})')) // true
console.log(filterBrackets('(){}[]')) // true
console.log(filterBrackets('(}')) // false
console.log(filterBrackets('[(])')) // false
console.log(filterBrackets('[({})](]')) // false*/

function filterBackspace(str) {
    var strLength = str.length,
        newStr = '',
        value = 1;

    for (var i = 0; i < strLength; i++) {
        if (str[i] === '#') {
            newStr = newStr.slice(0, i-value);
            value=value+2;
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

/*
filterBackspace('abc#d##c'); // ac
filterBackspace('abc#'); // ab
filterBackspace('a#bc#wer##'); // bw
filterBackspace(''); // ''*/
