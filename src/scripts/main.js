'use strict';
// TASK!!

// Відсортувати користувачевіНапишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та сортує їх за ним.

// Наприклад:

// let arr = [

//     { name: "User1", age: 25 },

//     { name: "User2", age: 30 },

//     { name: "User3", age: 28 }

// ];


// sortByAge(arr);


// // тепер: [User1, User3, User2]

// alert(arr[0].name); // User1

// alert(arr[1].name); // User3

// alert(arr[2].name); // User2

function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}
