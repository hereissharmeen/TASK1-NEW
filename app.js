
// TASK # 2

function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    
    return arr;
}


const smallArray = [1, 2, 3, 4, 5];
console.log("Original small array:", smallArray);
console.log("Reversed small array:", reverseArray(smallArray));

const largeArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Original large array:", largeArray);
console.log("Reversed large array:", reverseArray(largeArray));


// TASK # 2

function removeNegatives(arr) {
    return arr.filter(num => num >= 0);
}
const testArray = [3, -1, 4, -2, 5, -3, 6];
console.log("Original array:", testArray);
console.log("Filtered array (no negatives):", removeNegatives(testArray));



// TASK # 3


function countVowels(str) {
   
    const vowels = new Set('aeiouAEIOU');
    let count = 0;

    for (let char of str) {
        
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}
const sampleString = "Hello, World!";
console.log("Number of vowels in the string:", countVowels(sampleString));


//  TASK # 4

function isPalindrome(str) {
    const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

// Test cases
console.log(isPalindrome("kayak"));        
console.log(isPalindrome("mom"));           
console.log(isPalindrome("radar"));         
console.log(isPalindrome("refer"));          
console.log(isPalindrome("hello"));          
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("No 'x' in Nixon")); 


// TASK # 5


function isInRange(num1, num2) {
    const inRange1 = num1 >= 50 && num1 <= 99;
    const inRange2 = num2 >= 50 && num2 <= 99;
    return inRange1 || inRange2;
}

// Test cases
console.log(isInRange(45, 55)); 
console.log(isInRange(50, 100)); 
console.log(isInRange(99, 49)); 
console.log(isInRange(30, 40)); 
console.log(isInRange(70, 85)); 


// task # 6

function getMinValue(arr, mapFn) {
    const mappedArray = arr.map(mapFn);
    const minValue = Math.min(...mappedArray);
    return minValue;
}
const mapFunction = x => x * 2; 


const array = [5, 3, 8, 1, 4];
console.log("Minimum value after mapping:", getMinValue(array, mapFunction)); 


//  TASK # 7


function createUpdatedString(originalStr) {
    if (originalStr.length < 3) {
        throw new Error('String length must be 3 or more characters.');
    }

    
    const lastThreeChars = originalStr.slice(-3);

    
    const updatedStr = lastThreeChars.repeat(4);
    return updatedStr;

const originalString = "abcdefgh";
console.log("Updated string:", createUpdatedString(originalString)); // Output: "fghfghfghfgh"


// TASK # 8

function determineAngleType(angle) {
    if (angle <= 0 || angle >= 180) {
        return 'Invalid angle'; 
    }
    
    if (angle < 90) {
        return 'Acute angle';
    } else if (angle === 90) {
        return 'Right angle'; 
    } else if (angle < 180) {
        return 'Obtuse angle'; 
    } else if (angle === 180) {
        return 'Straight angle'; 
    }
}
console.log(determineAngleType(45));  
console.log(determineAngleType(90)); 


// TASK # 9

function findSmallestRoundNumber(value) {
    const num = Number(value);
    if (isNaN(num) || num < 0) {
        throw new Error('Invalid input: The value must be a non-negative number.');
    }
    const roundNumber = Math.ceil(num / 10) * 10;

    return roundNumber;
}
console.log(findSmallestRoundNumber(592));  
console.log(findSmallestRoundNumber(1000));
console.log(findSmallestRoundNumber(150));  
console.log(findSmallestRoundNumber(7));    
console.log(findSmallestRoundNumber(300));  

// TASK # 10

function findIndexOfItem(arr, item) {
   
    for (let i = 0; i < arr.length; i++) {
      
        if (arr[i] === item) {
          
            return i;
        }
    }
    return -1;
}
const arr = [10, 20, 30, 40, 50];

console.log(findIndexOfItem(arr, 30)); 
console.log(findIndexOfItem(arr, 25)); 
console.log(findIndexOfItem(arr, 50)); 
console.log(findIndexOfItem(arr, 10)); 
