const areAnagrams = (str1, str2) => {
    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();

    return arr1.join('') === arr2.join('');
  }

console.log(areAnagrams('мука', 'кума')) //true
console.log(areAnagrams('літо', 'тіло')) //true
console.log(areAnagrams('навчання', 'університет')) //false