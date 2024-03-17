// 36_5-1 Set And Read Simple Value From Local Storage

// localStorage.setItem('x','66')

// localStorage.getItem(x)
// localStorage.getItem('x')

// localStorage.removeItem('x')

// localStorage.clear()




// 36_5-2 How To Set And Get Objects To Local Storage

// const person = {name : 'sohel',age:33};
// console.log(person)

// person.toString()
// '[object Object]'

// JSON.stringify(person)
// '{"name":"sohel","age":33}'

// const personString = JSON.stringify(person)
// personString
// '{"name":"sohel","age":33}'
// JSON.parse(personString)
// {name: 'sohel', age: 33}


// const number = [10,12,234];
// console.log(number)
// JSON.stringify(number)
// '[10,12,234]'


// JSON.stringify(person)---->person object converted to string
// JSON.parse(personString)--->person string converted to person object

const hlo = localStorage.getItem('hello');
console.log(hlo)

const setAge = () => {
    // localStorage.setItem('age', 33);
    window.localStorage.setItem('age', 33);
}

//36_5-3 A Simple Shopping Cart To Add Product And Quantity

//start from this lec