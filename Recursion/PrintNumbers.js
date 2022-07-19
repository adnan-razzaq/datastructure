function descending(number) {
    if (number == 0) return;
    console.log(number);
    descending(number - 1);
}

descending(5);

function ascending(number) {
    if (number === 0) return;
    ascending(number - 1);
    console.log(number);
}

ascending(5);
