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


// function reverseSentence(sentence: string): string {
//     return sentence
//         .split(' ')                // So'zlarni ajratib arrayga o'girish
//         .map(word => word.split('').reverse().join('')) // Har bir so'zni chappaga o'girish
//         .join(' ');               // Arrayni qaytadan stringga aylantirish
// }

// console.log(reverseSentence("we like coding!")); // "ew ekil gnidoc!"



// M-TASK: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];




// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//     return numbers.map(num => ({
//         number: num,
//         square: num * num
//     }));
// }

// // Masalan
// const result = getSquareNumbers([1, 2, 3]);
// console.log(result); 


// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(str: string): boolean {
//     // Kirilgan stringni pastki harflarga o'girish va bo'shliqlarni olib tashlash
//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
//     // Stringni teskari qilib o'qish
//     const reversedStr = cleanedStr.split('').reverse().join('');
    
//     // Asl string va teskari o'qilgan stringni taqqoslash
//     return cleanedStr === reversedStr;
// }

// // Misollar:
// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false
// console.log(palindromCheck("A man a plan a canal Panama")); // true

// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(arr: any[]): number {
//     return arr.reduce((sum, item) => {
//         if (typeof item === 'number') {
//             return sum + item;
//         }
//         return sum;
//     }, 0);
// }

// // Misol uchun:
// const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
// console.log(result); // Natija: 45


// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//     return Object.entries(obj);
//   }
  
  
//   const result = objectToArray({ a: 10, b: 20 });
//   console.log(result); 


// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty(obj: Record<string, any>, prop: string): boolean {
//     return obj.hasOwnProperty(prop);
//   }
  

//   console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
//   console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false
  


// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;


// function calculate(expression: string): number {
//     return eval(expression);
//   }
  
//   console.log(calculate("1+3")); // 4

// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2


// function missingNumber(nums: number[]): number {
//     const n = nums.length;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
    
//     return expectedSum - actualSum;
// }

// // 
// console.log(missingNumber([3, 0, 1])); 


// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     return [...arr1, ...arr2].sort((a, b) => a - b);
//   }
  
//   // Sinov
//   console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
  

// U-TASK:      11-October 2024

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// function sumOdds(number: number): number {
//     let count = 0;
//     for (let i = 1; i <= number; i += 2) {
//       count++;
//     }
//     return count;
//   }
  
//   console.log(sumOdds(9));  // 4
//   console.log(sumOdds(15)); // 8

// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// function countChars(str: string): { [key: string]: number } {
//   const result: { [key: string]: number } = {};
  
//   for (const char of str) {
//       if (result[char]) {
//           result[char]++;
//       } else {
//           result[char] = 1;
//       }
//   }
  
//   return result;
// }

// // Misol:
// console.log(countChars("howareyou"));


// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]. typescriptda javob ber



// // //////////
// function chunkArray<T>(array: T[], chunkSize: number): T[][] {
//     const result: T[][] = [];
    
//     for (let i = 0; i < array.length; i += chunkSize) {
//         result.push(array.slice(i, i + chunkSize));
//     }
    
//     return result;
// }

// // Misol:
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunkSize = 3;

// console.log(chunkArray(array, chunkSize));
// // Natija: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]


/* TASK X

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda */

// let count = 0;
// function countOccurrences(obj: any,  str: string) {
//     const arr = Object.keys(obj);
//     const newArr = arr.map((ele) => {  
//         if (ele === str) count++;   
//         if (typeof obj[ele] === "object")countOccurrences(obj[ele], str);
//         else return;
//     });

// return count;
// }

// console.log(
//     countOccurrences(
//         {model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model'
//     )
// );



// Y-TASK:

// Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]


function findIntersection(arr1: number[], arr2: number[]): number[] {
    // Set orqali ikkala arrayda mavjud bo'lgan qiymatlarni topamiz
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    
    return [...set1].filter(value => set2.has(value));
  }
  
  // Misol
  const result = findIntersection([1, 2, 3], [3, 2, 0]);
  console.log(result);