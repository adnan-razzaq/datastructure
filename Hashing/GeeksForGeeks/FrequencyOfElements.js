/* 
1 Loop from index 1 and compare it with last element.
2 Keep track of frequency.
3 When elements are different. Print the element and frequency.
4 Reset the frequency to 1
*/
function frequency(array) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j] === element) {
                count++;
            }
        }
        console.log(element, count);
    }
}


/*  Use hash table */
function frequencyEff(array) {
    const container = {};
    for (let i = 0; i < array.length; i++) {
        if (container[array[i]]) {
            container[array[i]] = container[array[i]] + 1;
        } else {
            container[array[i]] = 1;
        }
    }
    console.log(container);
}

/* Using HashMaps */

function frequencyHash(array) {
    const map = new Map();
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            map.set(array[i], 1 + map.get(array[i]));
        } else {
            map.set(array[i], 1);
        }
    }

    for (const [key, value] of map) {
        console.log(key, value);
    }
}
frequencyHash([10, 12, 10, 15, 10, 20, 12, 12]);
