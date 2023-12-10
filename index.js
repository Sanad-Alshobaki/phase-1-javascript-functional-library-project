// Collection Functions
function standardizeInput(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);

}
function myEach(collection, callback) {
    const newCollection = standardizeInput(collection);

    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection
}

function myMap(collection, callback) {
    const newCollection = standardizeInput(collection);
    const newArr = []
    for (let i = 0; i < newCollection.length; i++) {
        newArr.push(callback(newCollection[i]));
    }

    return newArr

}

function myReduce(collection, callback, acc) {
    let newCollection = standardizeInput(collection);

    if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc
}

function myFind(collection, predicate) {
    const newCollection = standardizeInput(collection);

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) return newCollection[i]
    }
    return undefined
}

function myFilter(collection, predicate) {
    const newCollection = standardizeInput(collection);

    const newArr = []

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) newArr.push(newCollection[i]);
    }
    return newArr
}

function mySize(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
}


// Array Functions
function myFirst(array, n) {
    return (n) ? array.slice(0, n) : array[0];
}

function myLast(array, n) {
    return (n) ? array.slice(array.length - n, array.length) : array[array.length - 1];
}

// Object Functions
function myKeys(object) {
    const keys = []
    for (const key in object) {
        keys.push(key)
    }
    return keys
}

function myValues(object) {
    const values = []
    for (const key in object) {
        values.push(object[key])
    }
    return values
}