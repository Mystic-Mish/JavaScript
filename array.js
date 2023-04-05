//This program numbers divisible by three
function three(array) {
    return array.filter(function (a) {
        return !(a % 3);
    });
}

document.write('<pre>' + JSON.stringify(three([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 4) + '</pre>');