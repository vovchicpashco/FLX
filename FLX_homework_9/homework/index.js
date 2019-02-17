var inputData = [
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];

function findTypes() {
    let result = [];
    for (const argument of arguments) {
        result.push(typeof argument);
    }
    return result;
}

console.log(findTypes("number"));
console.log(findTypes(null, 5, "hello"));

function executeForEach(array, callback) {
    let results = [];
    for (let i = 0; i < array.length; i += 1) {
        results[i] = callback(array[i]);
    }
    return results;
}

console.log(executeForEach([1, 2, 3], function (el) {
    console.log(el)
}));

function mapArray(data, callback) {
    let result = [];
    for (let i = 0; i < data.length; i += 1) {
        result[i] = executeForEach([data[i]], callback)[0];
    }
    return result;
}

console.log(mapArray([2, 5, 8], function (el) {
    return el + 3
}));

function filterArray(data, callback) {
    let result = [];
    executeForEach(data, function (el) {
        if (callback(el)) {
            result.push(el);
        }
    });
    return result;
}

console.log(filterArray([2, 5, 8], function (el) {
    return el > 3
}));

function getAmountOfAdultPeople(data) {
    return filterArray(data, function (el) {
        return el.age > 18;
    }).length;
}

console.log(getAmountOfAdultPeople(inputData));

function getGreenAdultBananaLovers(data) {
    let filteredArr = filterArray(data, function (el) {
        return el.age > 18 && el.eyeColor === 'green' && el.favoriteFruit === 'banana';
    });
    let result = mapArray(filteredArr, function (el) {
        return el.name;
    });
    return result;
}

console.log(getGreenAdultBananaLovers(inputData));

function keys(obj) {
    let result = [];
    for (let k in obj) {
        result.push(k);
    }
    return result;
}

console.log(keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

function values(obj) {
    let result = [];
    for (let y in obj) {
        result.push(obj[y]);
    }
    return result;
}

console.log(values({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

function showFormattedDate(date) {
    const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `Date: ${date.getDate()} of ${monthList[date.getMonth()]}, ${date.getFullYear()}`;
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

function isEvenYear(date) {
    let year = date.getFullYear();
    return !(year % 2);
}

console.log(isEvenYear(new Date('2019-01-27T01:10:00')));
console.log(isEvenYear(new Date('2018-02-15T01:12:00')));

function isEvenMonth(date) {
    let month = date.getMonth() + 1;
    return !(month % 2);
}

console.log(isEvenMonth(new Date('2019-02-27T01:10:00')));
console.log(isEvenMonth(new Date('2019-01-27T01:11:00')));