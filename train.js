// G-TASK: 

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va 
// function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.


function getHighestIndex(arr) {
    // Arraydagi eng katta qiymatni topish
    const maxValue = Math.max(...arr);
    // Eng katta qiymatning birinchi uchragan indeksini qaytarish
    return arr.indexOf(maxValue);
}

// Misol
const result = getHighestIndex([86,45,91,19]);
console.log(result);  // Natija: 1
