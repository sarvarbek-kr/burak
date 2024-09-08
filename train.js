// G-TASK: 

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va 
// function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.


// function getHighestIndex(arr) {
//     // Arraydagi eng katta qiymatni topish
//     const maxValue = Math.max(...arr);
//     // Eng katta qiymatning birinchi uchragan indeksini qaytarish
//     return arr.indexOf(maxValue);
// }

// // Misol
// const result = getHighestIndex([86,45,91,19]);
// console.log(result);  // Natija: 1


// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"



function getDigits(str) {
    return str.replace(/\D/g, ''); // \D - digit bo'lmagan barcha belgilarni o'chiradi
}

console.log(getDigits("m14i1t")); // Output: "141"