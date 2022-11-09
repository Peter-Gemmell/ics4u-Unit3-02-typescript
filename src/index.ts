/**
 * Factoria; using recursion
 *
 * By:      Peter Gemmell
 * Version: 1.0
 * Since:   2022-11-07
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 *
 * 'Mean' is the "average" where you add up all the numbers
 *
 * @param {number} someInt parsedInt
 * @returns {number} factorial of number
 */
function factorial(someInt: number): number {
  let returnInt
  if (someInt === 0) {
    returnInt = 1
  } else if (someInt < 0) {
    returnInt = -1
  } else {
    returnInt = factorial(someInt - 1) * someInt
  }
  return returnInt
}

// input
const userNum = prompt('Enter a number: ')
try {
  const userInt = parseInt(userNum)
  if (isNaN(userInt)) {
    console.log('Invalid Input')
  } else {
    console.log(`${userInt}! = ${factorial(userInt)}`)
  }
} catch (e) {
  console.log('ERROR:')
}

console.log('\nDone.')
