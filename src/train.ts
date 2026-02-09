/* Project Standarts:
- Logging standarts
- Naming standarts:
  - function, method, variable => camelCase
  - class, enum => PascalCase
  - folder, file => kebab-case
  - css => snake_case
- Error handling
*/

/* Request:
  Traditional API
  Rest API
  GraphQL API
  ...
*/

/* Frontend Development:
  Traditional FD => SSR => EJS
  Modern FD => SPA => REACT / VUE / ANGULAR
*/

/* Cookies
  request join
  self destroy
*/

/* Validation:
  Frontend validation
  Backend validation
  Database validation
*/





//MIT Tasks <--P--O--N--M--L--K--J--I--H2--H--G--F--E--D--C--B--A-------------------------

// TASK P:
// Parametr sifatida yagona object qabul qiladigan function yozing. Qabul qilingan objectni nested array sifatida convert qilib qaytarsin. MASALAN: objectToAray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

function objectToArray(obj: Record<string, any>): [string, any][] {
  let result: [string, any][] = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}
console.log(objectToArray({ a: 10, b: 20 }));



// TASK O:
// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin. Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin. MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45. Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35. Qolganlari nested bo'lib yoki type'lari number emas.

// function calculateSum(arr: unknown[]): number {
//   let sum = 0;
//   for (const item of arr) {
//     if (item === Number(item)) {
//       sum += item as number;
//     }
//   }
//   return sum;
// }
// const result = calculateSum([10, "10", { son: 10 }, true, 35]);
// console.log("Sum:", result)



// TASK N:
// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin. MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(word: string): boolean {
//   let reversed = word.split("").reverse().join("");

//   if (word === reversed) {

//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));


// TASK M: 
// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(arr: number[]): {number: number, square: number}[] {
//   // 1. Natijani saqlash uchun bo‘sh array
//   let result = [];
//   // 2. Array ichidan bitta-bitta raqam olish
//   for (let i = 0; i < arr.length; i++) {
//     // 3. Har bir raqam uchun object yaratish
//     let obj = {
//       number: arr[i],           // raqamning o‘zi
//       square: arr[i] * arr[i]   // raqamning kvadrati
//     };
//     // 4. Object’ni result arrayga qo‘shish
//     result.push(obj);
//   }
//   // 5. Hosil bo‘lgan arrayni qaytarish
//   return result;
// }
// console.log(getSquareNumbers([1, 2, 3]));
// console.log(getSquareNumbers([4, 5, 6]));


// TASK L: 
// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin. MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(str: string): string {
//   let words = str.split(" ");
//   let result = [];
//   for (let i = 0; i < words.length; i++) {
//     let reversedWord = "";
//     let word = words[i];
//     for (let j = word.length - 1; j >= 0; j--) {
//       reversedWord += word[j];
//     }
//     result.push(reversedWord);
//   }
//   return result.join(" ");
// }
// console.log(reverseSentence("we like coding!"));



// Task K:
// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(str: string): number {
//   let count = 0;
//   const vowels = "aeiouAEIOU";
//   for (let ch of str) {
//     if (vowels.includes(ch)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("string"));   
// console.log(countVowels("Uzbekistan"));




// TASK J:
// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin. MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!". Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

// function findLongestWord(str: string): string {
//   let words = str.split(" ");
//   let longest = "";

//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }

//   return longest;
// }
// console.log(findLongestWord("I came from Uzbekistan!"));



// TASK-I:
// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin. MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4. Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

// function majorityElement(arr: number[]): number {
//   let maxCount = 0;
//   let result = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count > maxCount) {
//       maxCount = count;
//       result = arr[i];
//     }
//   }
//   return result;
// }
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));
// console.log(majorityElement([7, 8, 7, 9, 7, 10, 8, 7]));


// TASK H2: 
// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin. MASALAN: getDigits("m14i1t") return qiladi "141"
// function getDigits(str: string): string {
//   let a: string = "";

//   for (let i of str) {
//     if (i >= "0" && i <= "9") {
//       a += i;
//     }
//   }
//   return a;
// }
// console.log(getDigits("m14i1t"));
// console.log(getDigits("a98fbhw24gjj6bh1"));



// TASK H: 
// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin. MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(arr: number[]):string {
//     let result:string = "";

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             result = result + String(arr[i]);
//         }
//     }

//     return result;
// }

// console.log(getPositive([1, -4, 2]));
// console.log(getPositive([3, -4, 5, 7, -9]));


// ========================================================


// TASK G:
// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

// function getHighestIndex(arr) {
//     let max = arr[0];
//     let maxIndex = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//             maxIndex = i;
//         }
//     }

//     return maxIndex;
// }
// console.log(getHighestIndex([5, 21, 12, 21, 8]));
// console.log(getHighestIndex([3, 7, 2, 1]));


// ========================================================


// TASK F:
// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin. MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

// function findDoublers(str) {
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(findDoublers("hello"));
// console.log(findDoublers("abc"));   
// console.log(findDoublers("apple"));
// console.log(findDoublers("world")); 


// ========================================================


// TASK E:
// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// function getReverse(str) {
//     return str.split("").reverse().join("");
// }
// console.log(getReverse("play"));
// console.log(getReverse("maker"));


// ========================================================


// TASK-D
// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin. MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(str1, str2) {
//     // Uzunlikni tekshiramiz
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     // Harflarni tartiblash
//     let sorted1 = str1.split('').sort().join('');
//     let sorted2 = str2.split('').sort().join('');
//     // Taqqoslash
//     return sorted1 === sorted2;
// }
// console.log(checkContent("mitgroup", "gmtiprou"));
// console.log(checkContent("hello", "ollhe"));      
// console.log(checkContent("hello", "helloo"));     
// console.log(checkContent("abc", "abd"));       


// ========================================================


// // Task-C
// //Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin. MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// class Shop {
//   // Do‘kon ochilganda boshlang‘ich mahsulotlar
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }
//   // Hozirgi vaqtni olish
//   getTime() {
//     const now = new Date();
//     return now.getHours() + ":" + now.getMinutes();
//   }
//   // Qoldiqni ko‘rsatish
//   qoldiq() {
//     console.log(
//       "Hozir " + this.getTime() + "da " +
//       this.non + "ta non, " +
//       this.lagmon + "ta lagmon va " +
//       this.cola + "ta cola mavjud!"
//     );
//   }
//   // Mahsulot sotish
//   sotish(mahsulot, son) {
//     if (mahsulot === "non") {
//       this.non = this.non - son;
//     }
//     if (mahsulot === "lagmon") {
//       this.lagmon = this.lagmon - son;
//     }
//     if (mahsulot === "cola") {
//       this.cola = this.cola - son;
//     }
//     console.log(this.getTime() + "da " + son + "ta " + mahsulot + " sotildi");
//   }
//   // Mahsulot qabul qilish
//   qabul(mahsulot, son) {
//     if (mahsulot === "non") {
//       this.non = this.non + son;
//     }
//     if (mahsulot === "lagmon") {
//       this.lagmon = this.lagmon + son;
//     }
//     if (mahsulot === "cola") {
//       this.cola = this.cola + son;
//     }
//     console.log(this.getTime() + "da " + son + "ta " + mahsulot + " qabul qilindi");
//   }
// }

// const shop = new Shop(4, 5, 2);

// shop.qoldiq();          // Hozirgi qoldiq
// shop.sotish("non", 3);  // 3 ta non sotildi
// shop.qabul("cola", 4);  // 4 ta cola qabul qilindi
// shop.qoldiq();          // Yangi qoldiq


// ========================================================


// Task-B
///Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin. MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i]) && str[i] !== ' ') {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countDigits("ad2a54y79we3t0sfgb9"));


// ========================================================


// Task-A
//Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.MASALAN countLetter("e", "engineer") 3ni return qiladi.
// function countLetter(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLetter('e', 'engineer'));
// console.log(countLetter('n', 'banana'));