// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.

export function sum(...nums: Array<any>): number {

    return nums.reduce((acc, num) => acc += num, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {

    if ((a > (b + c)) || (b > (a + c)) || (c > (b + a))) {
        return "00"
    }
    if (a === b && a === c) {
        return "10"
    }
    if (a === b || a === c || b === c) {
        return "01"
    }
    if (a !== b && a !== c && b !== c) {
        return "11"
    } else {
        return "wtf?"
    }
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {

    return number.toString().split("").reduce((acc, num) => acc += parseInt(num, 10), 0)
}


// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenIndexSum = 0
    let oddIndexSum = 0
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || i % 2) {
            oddIndexSum += arr[i]
        } else {
            evenIndexSum += arr[i]
        }
    }

    return evenIndexSum > oddIndexSum
}


// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    let a = Math.sqrt(areaSq)
    let d = Math.sqrt(areaCr / 3.14) * 2
    return a >= d
}


// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    const cash = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let result = []
    let index = cash.findIndex(value => amountOfMoney >= value)
    while(amountOfMoney) {
        const different = amountOfMoney - amountOfMoney % cash[index]
        result.push(...Array(different/cash[index]).fill(cash[index]))
        amountOfMoney = amountOfMoney % cash[index]
        index += 1
    }

    return result
}