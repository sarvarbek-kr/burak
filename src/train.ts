// console.log("Heelo train");


// function getPositive(arr: number[]): string {
//     return arr.filter(x => x > 0).join('');
// }

// // Funksiyani sinab ko'ramiz
// console.log(getPositive([1, -4, 2]));  // Natija: "12"


// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141".


function getDigits(str: string): string {
    return str.replace(/\D/g, ''); // \D - digit bo'lmagan belgilarni o'chiradi
}

console.log(getDigits("m14i1t")); // Output: "141"
