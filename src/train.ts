console.log("Heelo train");


function getPositive(arr: number[]): string {
    return arr.filter(x => x > 0).join('');
}

// Funksiyani sinab ko'ramiz
console.log(getPositive([1, -4, 2]));  // Natija: "12"
