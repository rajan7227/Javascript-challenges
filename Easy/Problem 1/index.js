function sumAll (...numbers){
    return numbers.reduce((total, num)=> total + num, 0);
}

console.log(sumAll(1, 4));
console.log(sumAll(4, 4));
console.log(sumAll(1, 1, 1, 1));
console.log(sumAll(1, 2, 3));
console.log (sumAll(1, 2, 3, 4, 5, 6));