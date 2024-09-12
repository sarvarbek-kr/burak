// console.log("Heelo train");


// function getPositive(arr: number[]): string {
//     return arr.filter(x => x > 0).join('');
// }

// // Funksiyani sinab ko'ramiz
// console.log(getPositive([1, -4, 2]));  // Natija: "12"


// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141".


// function getDigits(str: string): string {
//     return str.replace(/\D/g, ''); // \D - digit bo'lmagan belgilarni o'chiradi
// }

// console.log(getDigits("m14i1t")); // Output: "141"




/* 
-- Project Standarts.

-- Naming Standarts:
     function, method , variable  == Camel
     class                        => PASCAL
     folder                       => KEBAB
     css                          => SNAKE

-- ERRor handling
*/


/* 
    Traditional API
    Rest API
    GRAPHQL API
    ....
*/


// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4


function majorityElement(arr: number[]): number {
    const count: { [key: number]: number } = {}; // Har bir elementni sanash uchun obyekt

    // Har bir elementni hisoblash
    for (let num of arr) {
        if (count[num]) {
            count[num]++; // Agar element allaqachon bo'lsa, sanashni oshiramiz
        } else {
            count[num] = 1; // Agar element yangi bo'lsa, uni 1 ga tenglaymiz
        }
    }

    // Eng ko'p takrorlangan elementni topish
    let majority: number = arr[0];
    let maxCount: number = 0;

    for (let num in count) {
        if (count[num] > maxCount) {
            maxCount = count[num];
            majority = Number(num); // num string bo'ladi, uni raqamga aylantiramiz
        }
    }

    return majority;
}

// Misol
console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // Natija: 4
