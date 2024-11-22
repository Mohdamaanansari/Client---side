function reverseString(str) {
    return str.split('').reverse().join('');
}

let originalString = "Nikita";
let reversedString = reverseString(originalString);
console.log(reversedString);  // Output: atikiN
