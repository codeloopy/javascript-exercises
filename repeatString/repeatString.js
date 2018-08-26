var repeatString = function(word, times) {
    return (times < 0) ? 'ERROR' : word.repeat(times);
}

module.exports = repeatString
