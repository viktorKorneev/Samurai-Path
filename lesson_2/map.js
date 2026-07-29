const numbers = [1, 5, 10, 15, 20]
const newNumbers = numbers.map((number) => {return  number + 10})
console.log(newNumbers) // [11, 15, 20, 25, 30] ⬅️ Итоговый результат

const names = ["Alice", "Bob", "Charlie", "Diana"]
const nameInfo = names.map((name) => {
    return {
        name: name,
        length: name.length
    }
})
console.log(nameInfo)
// ⬇️ Итоговый результат
// [
//   { name: 'Alice', length: 5 },
//   { name: 'Bob', length: 3 },
//   { name: 'Charlie', length: 7 },
//   { name: 'Diana', length: 5 }
// ]