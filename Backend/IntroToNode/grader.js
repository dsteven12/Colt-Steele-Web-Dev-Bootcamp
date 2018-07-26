var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(printIntro("Environmental Science"));
console.log(printAvg() + average(scores)); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(printIntro("Organic Chemistry"));
console.log(printAvg() + average(scores2)); //should return 68

function average(arr) {
    var totalScore = 0;
    for(var i = 0; i < arr.length; i++) {
        totalScore += arr[i];
    }
    return Math.round(totalScore /= arr.length);
}

function printIntro(subject) {
    return `--Average score for ${subject}--`;
}

function printAvg() {
    return "The average score is: ";
}