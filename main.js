let arr = [2, 4, 9, 10, 45, 67, 8, 90];
let juft = [];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        juft.push(arr[i]);
    }
}

console.log(juft);