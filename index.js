const myEach = function(collection, callback){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            callback(collection[i]);
        }
    }else if(typeof collection === 'object'){
        for (const key in collection){
            if (collection.hasOwnProperty(key)){
                callback(collection[key]);
            }
        }
    }
    return collection;
}
function myMap(collection, callback) {
    if (Array.isArray(collection)) {
        return collection.map(callback);
    } else if (typeof collection === 'object') {
        const result = [];
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key]));
            }
        }
        return result;
    }
}
function myReduce(collection, callback, initialValue) {
    if (Array.isArray(collection)) {
        if (initialValue !== undefined) {
            return collection.reduce(callback, initialValue);
        } else {
            return collection.reduce(callback);
        }
    } else if (typeof collection === 'object') {
        let acc = initialValue !== undefined ? initialValue : undefined;
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (acc === undefined) {
                    acc = collection[key];
                } else {
                    acc = callback(acc, collection[key], collection);
                }
            }
        }
        return acc;
    }
}


function myFind(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (callback(collection[i])) {
                return collection[i];
            }
        }
    } else if (typeof collection === 'object') {
        for (const key in collection) {
            if (callback(collection[key])) {
                return collection[key];
            }
        }
    }
    return undefined;
}
function myFilter(collection, callback) {
    if (!Array.isArray(collection) && typeof collection !== 'object') {
        return []; 
    }

    const filtered = [];

    for (const key in collection) {
        if (callback(collection[key])) {
            filtered.push(collection[key]);
        }
    }

    return filtered;
}


function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object') {
        return Object.keys(collection).length;
    } else {
        return 0; 
    }
}

function myFirst(collection, n = 1) {
    if (!Array.isArray(collection)) {
        return undefined; 
    }
    
    if (n === 1) {
        return collection[0];
    } else {
        return collection.slice(0, n); 
    }
}

function myLast(collection, n) {
    if (!n) {
        return collection[collection.length - 1];
    } else {
        return collection.slice(-n);
    }
}
function myKeys(obj) {
    return Object.keys(obj);
}
function myValues(obj) {
    return Object.values(obj);
}