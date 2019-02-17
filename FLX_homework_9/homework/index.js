let inputData = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
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

function findType() {
    let result = [];
    for (const argument of arguments) {
        result.push(typeof argument);
    }
    return result;
}

findType(null, 5, "hello");

function executeForEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

executeForEach([1, 2, 3], function (el) {
     console.log(el);
});

function mapArray(data, callback) {
    let result = [];
    executeForEach(data, function (el) {
        result.push(callback(el));
    });
    return result;
}

mapArray([2, 5, 8], function (el) {
    return el + 3;
});

function filterArray(data, callback) {
    let result = [];
    executeForEach(data, function (el) {
        if (callback(el)) {
            result.push(el);
        }
    });
    return result;
}

filterArray([2, 5, 8], function (el) {
    return el > 3
});

function getAmountOfAdultPeople (data) {
   return filterArray(data, function (el) {
        return el.age > 18;
    }).length;
}

getAmountOfAdultPeople(inputData);

function getGreenAdultBananaLovers(data) {
    let filteredArr = filterArray(data, function (el) {
        return el.age > 18 && el.eyeColor === 'green' && el.favoriteFruit === 'banana';
    });
    let result = mapArray(filteredArr, function (el) {
        return el.name;
    });
    return result;
}

getGreenAdultBananaLovers(inputData);

function keys(obj) {
     let result = [];
     for(let key in obj) {
         result.push(key);
     }
     return result;
}

keys({"keyOne": 1, "keyTwo": 2, "keyThree": 3});

function properties(obj) {
    let result = [];
    for(let k in obj) {
        result.push(obj[k]);
    }
    return result;
}

properties({"keyOne": 1, "keyTwo": 2, "keyThree": 3});

function showFormattedDate(date) {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `Date: ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()}`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date) {
    let year = date.getFullYear();
    return !(year % 2);
}

isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(date) {
    let month = date.getMonth() + 1;
    return !(month % 2);
}

isEvenMonth(new Date('2019-02-27T01:10:00'));