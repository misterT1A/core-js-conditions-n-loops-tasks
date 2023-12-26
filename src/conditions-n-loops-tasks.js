/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return !(number < 0);
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    }
    return c;
  }
  return b;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  let lastNum = num;

  if (num > 10) {
    const count = Math.floor(num / 10);

    for (let i = 0; i < count; i += 1) {
      result += 'X';
    }
    lastNum = num % 10;
  }

  switch (lastNum) {
    case 1:
      result += 'I';
      break;
    case 2:
      result += 'II';
      break;
    case 3:
      result += 'III';
      break;
    case 4:
      result += 'IV';
      break;
    case 5:
      result += 'V';
      break;
    case 6:
      result += 'VI';
      break;
    case 7:
      result += 'VII';
      break;
    case 8:
      result += 'VIII';
      break;
    case 9:
      result += 'IX';
      break;
    case 10:
      result += 'X';
      break;

    default:
      break;
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    if (numberStr[i] === '-') result += 'minus';
    if (numberStr[i] === '.' || numberStr[i] === ',') result += 'point';
    switch (numberStr[i]) {
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '0':
        result += 'zero';
        break;

      default:
        break;
    }
    if (i !== numberStr.length - 1) {
      result += ' ';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    result += str[str.length - (i + 1)];
  }

  return str === result;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const strNum = `${num}`;

  for (let i = 0; i < strNum.length; i += 1) {
    if (+strNum[i] === digit) {
      return true;
    }
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;

  for (let i = 1; i < arr.length - 1; i += 1) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let j = 0; j < i; j += 1) {
      sumLeft += arr[j];
    }

    for (let z = i + 1; z < arr.length; z += 1) {
      sumRight += arr[z];
    }

    if (sumLeft === sumRight) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];

    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let i = 0;
  let j = 0;
  let direction = 'right';
  let count = 1;

  for (let z = 0; z < size * size; z += 1) {
    if (matrix[i][j] === 0) {
      matrix[i][j] = count;
    }

    switch (direction) {
      case 'right':
        if (j < size - 1) {
          j += 1;
          if (matrix[i][j] !== 0) {
            j -= 1;
            direction = 'down';
            i += 1;
          }
        } else {
          direction = 'down';
          i += 1;
        }
        break;

      case 'down':
        if (i < size - 1) {
          i += 1;
          if (matrix[i][j] !== 0) {
            i -= 1;
            direction = 'left';
            j -= 1;
          }
        } else {
          direction = 'left';
          j -= 1;
        }
        break;

      case 'left':
        if (j > 0) {
          j -= 1;
          if (matrix[i][j] !== 0) {
            j += 1;
            direction = 'up';
            i -= 1;
          }
        } else {
          direction = 'up';
          i -= 1;
        }
        break;

      case 'up':
        if (i > 0) {
          i -= 1;
          if (matrix[i][j] !== 0) {
            i += 1;
            direction = 'right';
            j += 1;
          }
        } else {
          direction = 'right';
          j += 1;
        }
        break;

      default:
        break;
    }
    count += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rotMatrix = matrix;
  const cloneMatrix = [];

  for (let i = 0; i < matrix.length; i += 1) {
    cloneMatrix[i] = [];

    for (let j = 0; j < matrix.length; j += 1) {
      cloneMatrix[i][j] = matrix[i][j];
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      rotMatrix[j][matrix.length - 1 - i] = cloneMatrix[i][j];
    }
  }

  return rotMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const newArr = arr;
  for (let i = 0; i < newArr.length; i += 1) {
    let minElem = i;
    for (let j = i + 1; j < newArr.length; j += 1) {
      if (newArr[j] < newArr[minElem]) {
        minElem = j;
      }
    }

    const changeElem = newArr[i];
    newArr[i] = newArr[minElem];
    newArr[minElem] = changeElem;
  }

  return newArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  let count = 1;
  const resultArr = [];
  resultArr[count - 1] = result;

  while (count <= iterations) {
    let strEven = '';
    let strOdd = '';

    for (let i = 0; i < result.length; i += 1) {
      if (i % 2 === 0) {
        strEven += result[i];
      } else {
        strOdd += result[i];
      }
    }

    result = strEven + strOdd;
    resultArr[count] = result;

    if (result === str) break;

    count += 1;
  }

  return resultArr[iterations % count];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numArr = [];
  const numberStr = `${number}`;

  for (let i = 0; i < numberStr.length; i += 1) {
    numArr.push(+numberStr[i]);
  }

  const arrLength = numArr.length;
  let minDigit = 0;
  let mindigitInd = 0;

  for (let i = arrLength - 1; i >= 0; i -= 1) {
    if (numArr[i] > numArr[i - 1]) {
      minDigit = numArr[i - 1];
      mindigitInd = i - 1;
      break;
    }
  }
  const numArrCoppy = [...numArr];
  const rightArrDigits = numArrCoppy
    .splice(mindigitInd + 1)
    .filter((elem) => elem > minDigit);

  let changeDigitInd = 0;
  for (let z = arrLength - 1; z >= 0; z -= 1) {
    if (numArr[z] === Math.min(...rightArrDigits)) {
      changeDigitInd = z;
      break;
    }
  }

  [numArr[mindigitInd], numArr[changeDigitInd]] = [
    numArr[changeDigitInd],
    numArr[mindigitInd],
  ];

  const rightSortPartArr = numArr.splice(mindigitInd + 1).sort();
  return +[...numArr, ...rightSortPartArr].join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
