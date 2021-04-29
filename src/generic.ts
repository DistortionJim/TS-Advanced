// const cars: string[] = ["LADA", "Renault"]
// const cars2: Array<string> = ["LADA", "Renault"]
//
// const promise = new Promise<string>(resolve => {
//     setTimeout(() => {
//         resolve('Promise resolve')
//     }, 1000)
// })
//
// promise.then(data => {
//     console.log(data.toLowerCase().trim());
// })

function mergeObject<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merge = mergeObject({name: "Jhon"}, {num: 22})
const merge2 = mergeObject({name2: "Bob"}, {num2: 32})

// const merge3 = mergeObject("test", "test")
// console.log(merge3);

// =================

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: ` Value ${value.length} length`
    }
}

console.log(withCount('Some string'));
console.log(withCount([1, 2, 3]));
// console.log(withCount(20));
console.log(withCount({length: 1}));


//=================================

function getObjecValue<T extends object, R extends  keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: 'Alex',
    age: 33
}

console.log(getObjecValue(person, 'name'));
console.log(getObjecValue(person, 'age'));
// console.log(getObjecValue(person, 'male'));

//======================

class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) {
    }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(['I', 'am', 'string'])
strings.add('!')
strings.remove('am')
console.log(strings.items);

const numbers = new Collection<number>([1, 3, 6])
numbers.add(9)
numbers.remove(6)
console.log(numbers.items);

// const objs = new Collection([{a: 1}, {b: 2}])
// objs.remove({b: 2})
// console.log(objs.items);

// =================

interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}

    if (model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }

    return  car as Car
}

// ===========

const cars: Readonly<Array<string>> = ['BMW', "Ford"]
// cars.shift()
