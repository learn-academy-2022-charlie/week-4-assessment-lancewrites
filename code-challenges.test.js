// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe('shuffledArr', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const expected1 = ["yellow", "blue", "pink", "green"]
    it("it removes the value of the first index and shuffles the order of the remaining values", () => {
      expect(colors1).toEqual(expect.arrayContaining(expected1))
    })
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it("it removes the value of the first index and shuffles the order of the remaining values", () => {
      expect(colors2).toEqual(expect.arrayContaining(expected2))
    })
  })


// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

            // FAIL  ./code-challenges.test.js
            // shuffledArr
            //   ✕ it removes the vale of the first index and shuffles the order of the remaining values (2 ms)
            //   ✕ it removes the vale of the first index and shuffles the order of the remaining values (1 ms)

            // ● shuffledArr › it removes the vale of the first index and shuffles the order of the remaining values
            // ● shuffledArr › it removes the vale of the first index and shuffles the order of the remaining values


// b) Create the function that makes the test pass.

//Create a function called shuffledArr that takes an array as an argument for the parameter
  //reverse the order of the array and pop the last element
  //shuffle the remaining elements in the array using Fisher and Yates

            const shuffledArr = (array) => {
                array.reverse().pop()
                for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array
            }

                // PASS  ./code-challenges.test.js
                // shuffledArr
                //   ✓ it removes the vale of the first index and shuffles the order of the remaining values (2 ms)
                //   ✓ it removes the vale of the first index and shuffles the order of the remaining values

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.


describe("minMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]
        
        
        
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
})
            // FAIL  ./code-challenges.test.js
            // minMax
            //     ✕ takes an array of numbers and returns an array of the minimum and maximum numbers in that order (1 ms)
            //   ● minMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order
            //     ReferenceError: minMax is not defined


// b) Create the function that makes the test pass.

//Create a function called minMax that takes in an array of numbers as an argument in the parameter
 //create a variable called newArr to contain the values of the new array
 //push the smalles number of the array to newArr using Math.min and a spread operator
 //push the largest number of the array to newArr using Math.max and a spread operator
 //return the newArr


 const minMax = (array) => {
    let newArr = []
    newArr.push(Math.min(...array))
    newArr.push(Math.max(...array))
    return newArr
  }


            //   PASS  ./code-challenges.test.js
            //   minMax
            //   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order (1 ms)





// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDuplicate", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {

        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
        expect(noDuplicate(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])

    })
})
            // FAIL  ./code-challenges.test.js
            // noDuplicate
            //     ✕ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)
            //   ● noDuplicate › takes in two arrays as arguments and returns one array with no duplicate values
            //     ReferenceError: noDuplicate is not defined







// b) Create the function that makes the test pass.

//Create a function called noDuplicate that takes in two arrays of numbers
    //create a variable newArr that combines the two arrays using spread operators
    //create a new variable called removeDuplicates that contains a Set of the combined array removing the duplicate values
    //return removeDuplicates array

const noDuplicate = (array1, array2) => {
    let newArr = [...array1, ...array2]
    let removeDuplicates = [...new Set(newArr)]
    return removeDuplicates
}

                // PASS  ./code-challenges.test.js
                // noDuplicate
                    // ✓ takes in two arrays as arguments and returns one array with no duplicate values (2 ms)