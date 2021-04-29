"use strict";
function mergeObject(a, b) {
    return Object.assign({}, a, b);
}
const merge = mergeObject({ name: "Jhon" }, { num: 22 });
const merge2 = mergeObject({ name2: "Bob" }, { num2: 32 });
function withCount(value) {
    return {
        value,
        count: ` Value ${value.length} length`
    };
}
console.log(withCount('Some string'));
console.log(withCount([1, 2, 3]));
console.log(withCount({ length: 1 }));
function getObjecValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Alex',
    age: 33
};
console.log(getObjecValue(person, 'name'));
console.log(getObjecValue(person, 'age'));
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'am', 'string']);
strings.add('!');
strings.remove('am');
console.log(strings.items);
const numbers = new Collection([1, 3, 6]);
numbers.add(9);
numbers.remove(6);
console.log(numbers.items);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars = ['BMW', "Ford"];
//# sourceMappingURL=generic.js.map