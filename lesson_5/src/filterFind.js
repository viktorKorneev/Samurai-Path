
const numbers = [1, 15, 3, 42, 8, 19, 7, 25, 11, 33]

const evenNumbers = numbers.filter(n => n % 2 === 0) // твой код
// console.log(evenNumbers)

const bigNumbers = numbers.filter(n => n > 10) // твой код
// console.log(bigNumbers)


// Найди первое число больше 20
const firstBig = numbers.find(n => n > 20) // твой код
// console.log(firstBig)

// =================================================================

const students = [
    { name: "Анна", age: 19, grade: 7, course: 2 },
    { name: "Диана", age: 17, grade: 8, course: 1 },
    { name: "Виктория", age: 21, grade: 5, course: 3 },
    { name: "Григорий", age: 18, grade: 9, course: 2 },
    { name: "Борис", age: 20, grade: 4, course: 3 },
    { name: "Евгений", age: 16, grade: 6, course: 1 },
]

// Найди студентов 18+ лет
// const adults = students.filter(student => student.age > 18)
// console.log(adults)



const adults = students.filter(isAdultGoodStudents)
// console.log(adults)

function isAdult (student) {
    return student.age >= 18
}

// Найди студентов с оценкой 8+
function isExcellentStudents (student) {
    return student.grade >= 8
}// твой код

// Найди студентов 2 курса
function isSecondCourse (student) {
    return student.course === 2
}

// Найди взрослых студентов с оценкой выше 6
function isAdultGoodStudents (student) {
    return student.grade > 6 && student.age >= 18
}

// ==================================================================

// Найди студента по имени 'Виктория'
const victoria = students.find(n => n.name === "Виктория") // твой код
// console.log(victoria)

// Найди первого студента с оценкой 8+
const firstExcellent = students.find(n => n.grade >= 8) // твой код
// console.log(firstExcellent)

// Попытайся найти студента младше 16 лет
const tooYoung = students.find(n => n.age < 16) // твой код
// console.log(tooYoung) // должно быть undefined

// ===========================================================================

const colors = ["красный", "синий", "зелёный", "жёлтый", "фиолетовый"]

// 1. Найди цвета с четными индексами (0, 2, 4...)
const evenIndexColors = colors.filter((el, i) => i % 2 === 0)
// console.log(evenIndexColors)

// 2. Найди первый цвет, индекс которого больше 2
const colorAfterIndex2 = colors.find((el, i) => i > 2)
// console.log(colorAfterIndex2)

// =================================================================================

