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
REQUESTLAR :
    Traditional API
    Rest API
    GRAPHQL API
    ....
*/


// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4


// function majorityElement(arr: number[]): number {
//     const count: { [key: number]: number } = {}; // Har bir elementni sanash uchun obyekt

//     // Har bir elementni hisoblash
//     for (let num of arr) {
//         if (count[num]) {
//             count[num]++; // Agar element allaqachon bo'lsa, sanashni oshiramiz
//         } else {
//             count[num] = 1; // Agar element yangi bo'lsa, uni 1 ga tenglaymiz
//         }
//     }

//     // Eng ko'p takrorlangan elementni topish
//     let majority: number = arr[0];
//     let maxCount: number = 0;

//     for (let num in count) {
//         if (count[num] > maxCount) {
//             maxCount = count[num];
//             majority = Number(num); // num string bo'ladi, uni raqamga aylantiramiz
//         }
//     }

//     return majority;
// }

// // Misol
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // Natija: 4


// J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan".

// function findLongestWord(sentence: string): string {
//     // So'zlarni ajratish uchun bo'sh joy asosida bo'lib olamiz
//     const words = sentence.split(' ');

//     // Eng uzun so'zni topish uchun
//     let longestWord = '';

//     for (let word of words) {
//         // Agar hozirgi so'z oldingi eng uzun so'zdan uzunroq bo'lsa, uni yangilaymiz
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// // Misol
// console.log(findLongestWord("I come from Surkhandarya")); // "Surkhandarya"


         //      COOKIE

         // request join
         // Self destroy
        //  K-TASK: 

        //  Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
        //  MASALAN: countVowels("string") return 1;
   
        //  function countVowels(str: string): number {
        //     // Unli harflar to'plami
        //     const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        //     let count: number = 0;
        
        //     // Har bir belgi bo'yicha tekshiruv
        //     for (let char of str) {
        //         if (vowels.includes(char)) {
        //             count++;
        //         }
        //     }
        
        //     return count;
        // }
        
        // // Test
        // console.log(countVowels("Korea")); // 3 ta
        // console.log(countVowels("my name is Sarvarbek")); // 6 ta
        // console.log(countVowels("TypeScriptda Tuzdik")); // 5 ta
        

        /* Validation:
        Frontend validation
        Backend validation
        Database validation
        */



//         L-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";


function reverseSentence(sentence: string): string {
    return sentence
        .split(' ')                // So'zlarni ajratib arrayga o'girish
        .map(word => word.split('').reverse().join('')) // Har bir so'zni chappaga o'girish
        .join(' ');               // Arrayni qaytadan stringga aylantirish
}

console.log(reverseSentence("we like coding!")); // "ew ekil gnidoc!"
